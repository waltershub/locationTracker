package com.wyre;

import com.google.gson.Gson;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.HashMap;

public class Main {

    public static void main(String[] args) {
        //get the json reponse from the geoip server
        try {

            while(true) {
                System.out.print("Retreiving json to parse.....");
                //use a url connection to retreive the json
                URL url = new URL("https://freegeoip.net/json/");
                URLConnection connection = url.openConnection();
                //read it with a buffered reader
                BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                String jsonToParse = "";
                String line;
                //while the stream is not null retreive the next line of the json and add it to the jsonToParse object
                while ((line = reader.readLine()) != null) {
                    jsonToParse += line;
                }
                System.out.println("Complete!!!!");
                System.out.print("Parsing json....");
                //use google gson to parse the json into a usable java object
                GeoIp geoIp = new Gson().fromJson(jsonToParse, GeoIp.class);
                LocationSchema schema = new LocationSchema();
                schema.setDeviceName("Rimmer");
                ArrayList<HashMap<String,Double>> list = new ArrayList<>();
                HashMap<String,Double> map = new HashMap<>();
                map.put("Latitude",geoIp.getLatitude());
                map.put("Longitude",geoIp.getLongitude());
                list.add(map);
                schema.setLocations(list);
                String jsonToSend = new Gson().toJson(schema);
                System.out.println("Complete!!!");
                System.out.print("Sending results to the server....");
                //create a url to contact the location tracking server
                URL url2 = new URL("http://c41e3943.ngrok.io/location");

                HttpURLConnection conn= (HttpURLConnection) url2.openConnection();
                conn.setDoOutput( true );
                conn.setInstanceFollowRedirects( false );
                conn.setRequestMethod( "POST" );
                conn.setRequestProperty( "Content-Type", "application/json; charset=UTF-8");
                conn.setRequestProperty( "charset", "utf-8");
                conn.setRequestProperty( "Content-Length", Integer.toString( jsonToSend.length() ));
                conn.setUseCaches( false );
                PrintWriter writer = new PrintWriter(new OutputStreamWriter(conn.getOutputStream()));
                System.out.println("Sending: " + jsonToSend);
              writer.print(jsonToSend);
              writer.flush();
              BufferedReader reader2 = new BufferedReader(new InputStreamReader(conn.getInputStream()));
              String read;
              while((read=reader2.readLine())!=null){
                  System.out.println(read);
              }
                System.out.println("Complete!!!");
                System.out.print("Sleeping for 10 seconds....");
                Thread.sleep(10000);
                System.out.println("Complete!!!");
            }
        } catch (Exception ex) {
            System.out.println("There was a error: " + ex.getMessage());
        }
    }
}
