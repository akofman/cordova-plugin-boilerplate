import Foundation

@objc(PluginName) class PluginName : CDVPlugin {
  private let LOG_TAG = "PluginName"

  func hello(command: CDVInvokedUrlCommand) {
    let message = "Hello !"

    let pluginResult = CDVPluginResult(status: CDVCommandStatus_OK, messageAsString: message)
    commandDelegate.sendPluginResult(pluginResult, callbackId:command.callbackId)
  }
}
