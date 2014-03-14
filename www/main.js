var scanCode = function() {
   cordova.plugins.barcodeScanner.scan(
      function (result) {
          alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
      }, 
      function (error) {
          alert("Scanning failed: " + error);
      }
   );
}

var encodeText = function() {
    cordova.plugins.barcodeScanner.encode(
            BarcodeScanner.Encode.TEXT_TYPE,
            "http://www.mobiledevelopersolutions.com", 
            function(success) {
                alert("Encode success: " + success);
            }, function(fail) {
                alert("Encoding failed: " + fail);
            });
}

var encodeEmail = function() {
    cordova.plugins.barcodeScanner.encode(
        BarcodeScanner.Encode.EMAIL_TYPE,
        "a.name@gmail.com", function(success) {
            alert("Encode success: " + success);
        }, function(fail) {
            alert("Encoding failed: " + fail);
        });
}

var encodePhone = function() {
    cordova.plugins.barcodeScanner.encode(
        BarcodeScanner.Encode.PHONE_TYPE,
        "555-227-5283", function(success) {
            alert("Encode success: " + success);
        }, function(fail) {
            alert("Encoding failed: " + fail);
        });
}

var encodeSMS = function() {
    cordova.plugins.barcodeScanner.encode(
        BarcodeScanner.Encode.SMS_TYPE,
        "An important message for someone.", function(success) {
            alert("Encode success: " + success);
        }, function(fail) {
            alert("Encoding failed: " + fail);
        });
}