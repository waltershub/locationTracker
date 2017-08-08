package com.wyre;

import java.util.ArrayList;
import java.util.HashMap;

/**
 * Created by yaakov on 8/7/17.
 */
public class LocationSchema {
    private String deviceName;
    private ArrayList<HashMap<String,Double>> locations;
    public ArrayList<HashMap<String, Double>> getLocations() {
        return locations;
    }

    public void setLocations(ArrayList<HashMap<String, Double>> locations) {
        this.locations = locations;
    }


    public String getDeviceName() {
        return deviceName;
    }

    public void setDeviceName(String deviceName) {
        this.deviceName = deviceName;
    }




}
