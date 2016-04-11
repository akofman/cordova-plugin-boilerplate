package org.apache.cordova.boilerplate;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.LOG;
import org.apache.cordova.PluginResult;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
* Plugin Description
*/
public class Boilerplate extends CordovaPlugin {

  private static final String LOG_TAG = "Boilerplate";

  @Override
  public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
    //LOG.setLogLevel(LOG.DEBUG);

    if (action.equals("hello")) {
      PluginResult result = new PluginResult(PluginResult.Status.OK, "Hello");
      callbackContext.sendPluginResult(result);
    } else {
      LOG.e(LOG_TAG, "Not a valid action: " + action);
      return false;
    }
  }
  return true;
}
