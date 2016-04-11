import Foundation

@objc(Boilerplate) class Boilerplate : CDVPlugin {
  private let LOG_TAG = "Boilerplate"

  func hello(command: CDVInvokedUrlCommand) {
    let message = "Hello !"

    let pluginResult = CDVPluginResult(status: CDVCommandStatus_OK, messageAsString: message)
    commandDelegate.sendPluginResult(pluginResult, callbackId:command.callbackId)
  }
}
