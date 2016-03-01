import Foundation

@objc(SwiftVideoPlugin) class SwiftVideoPlugin : CDVPlugin {
  func sayHello(command: CDVInvokedUrlCommand) {
    let message = "Hello !";

    let pluginResult = CDVPluginResult(status: CDVCommandStatus_OK, messageAsString: message);
    pluginResult.setKeepCallbackAsBool(true)
    commandDelegate?.sendPluginResult(pluginResult, callbackId:command.callbackId);

    let pluginResultTwo = CDVPluginResult(status: CDVCommandStatus_OK, messageAsString: "World!");
    // pluginResultTwo.setKeepCallbackAsBool(true) // this will cause it not to work,
    // if you set this true (again)
    // you need to then send another result after the one below
    commandDelegate?.sendPluginResult(pluginResultTwo, callbackId:command.callbackId);


  }
}


// http://stackoverflow.com/questions/25448976/how-to-write-cordova-plugin-in-swift