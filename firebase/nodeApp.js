import * as admin from "firebase-admin";

if (!admin.apps.length) {
  console.log(typeof process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"));
  admin.initializeApp({
    credential: admin.credential.cert({
      type: "service_account",
      project_id: "gc-masterclass",
      private_key_id: "1036f7290bb86822fb0a8b01805b67d818fd734b",
      private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCXzrf1XNmPWxBQ\nspkT4/Wha8c2JDngkjP/ysNkZIRtvsXIcWWf1ekbN1eFRW6L9n0PS14jAUSmxHCZ\nfKS+wwAVOfmzbOWjvbl6S6Inr0g7iUxv5HFd3rmSn08lEXXRtFYW7yGouDr9nR/9\nLqT2hW99cWaaojh1ljTkoGghJQQXiYC7gq9PYrtjjBH2p7RalBLvgD2r43dJvewA\ny04V1tAUqA8M5pFeVwerwBwnHaDlXy3uJ7pEtlGLObsdWqsRWck3CC6YE4eRhVv3\nD9nxIcAciiOioaGIBkR+izrSAT9VrJaU041qz8XfW4vkmMQ3YiMRMWBI1YyaWvV7\nUbfYGbdnAgMBAAECggEABVeu90yVCTWPkovHJDdoOwQMRu7umSBSPVFFgmo+bECh\nZCJ0R9uPZpCIiT/lo+CobdUsTjfDPwTuQpumyWIunnMU6o0cSJa+dVl5OJJk0ab0\nwfho1M9PeeiM/08o4ftToujpJv5EhEijcYbcrPtFleygfKpLjCR2LWJlLejSAgHX\nPiPcP8G2uz7WqsfDZhmRg2zyPtYbe+uZxVhc5k4tsq3PA6iG97CQa56K/MWeXDFD\n6ndFz2su0aaqmSBDtIvNhWphi8F121q0QbnWTy/5Dnxhjd8POoytsbijvV2JUZIp\nYcSpQOdcWNoL4l/Uwq0gn106RDiKe/1m7bi/i9AMDQKBgQDWLny/KbH7/guqBLpX\n+iI7njZpOcNJo9ts3NqXLbtg/cFVVWgCmJZNVzPDh4d7+6zzpHgLwSbUMLOSHj4C\n4guoGWFhcyPcbflWcAqxf48dwM61+RsG8KHaz3Jo2SKquU1xuEq431M8sxik4Mvg\nmeXUvrvkEH7K4K/TcqVoxerliwKBgQC1cpCxf88mC5JAbj6OAIyXSYk8Un7ulCnH\n4KrIPdVGzkfDqtCnai3Qh7ZQ2l0Drrf5fQjNBlAJ3YU5IpXrg+7o+bNDOiTbQic+\nUlWYWU9/i3mlnji9HrAHSBDOrQiutUz1feGi2tj6p2Q7+h6z37xtcsvYgCO02LQ7\nEQMek6kJFQKBgC96nqzB0XLLHkrSQXy/NleA+w7YfzIT4NCBJPPeb2tQ1UrVY/kv\nWiJK8m6l3KLfZ7ea/gGdD756DVSW36hD89GPzsaLf6eduWgv7i7q2A8AbtJoJlWj\ngj2/Pt1/RPATo9dRwz64QvtxuETUkF15wDkpDv2/qlvO8yssfv564VeBAoGAfhPn\nGo72fzcXHpH8AWu8RPsh0rp33IszJOGliZH9ej+nefxdE5ch0n4aXr/8Vay3xTHu\nRZgXUWONSJARoB6CiXvH5fSm23tyDUnklAGqzbM6iawRPMfwBH88vn9ZQxxTJ1ma\nyTBMCI77hPldEBtssJhNsFgJd4YEZe6CPmLX16kCgYEAo3AU5FCnH5lj/+X7Di4K\ndAlMbjOLN01lCCwo7pn4hS6VYQl4GqTR10vjzQvxdc+dq2VSueYtHDqfm735NsYj\nP8LgTRrVe6Uw60co/SzJHaxL/z+WJeGrW+kotkI92STDOL4BQrCYxSWAUT81UGKK\nzDl43RaHFqiCweJlRFo5pvM=\n-----END PRIVATE KEY-----\n".replace(
        /\\n/g,
        "\n"
      ),
      client_email:
        "firebase-adminsdk-ixa3n@gc-masterclass.iam.gserviceaccount.com",
      client_id: "117207076944763433827",
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url:
        "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ixa3n%40gc-masterclass.iam.gserviceaccount.com",
    }),
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  });
}

export default admin;
