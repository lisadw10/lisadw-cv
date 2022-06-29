import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head> <div>
      <title>Personify Personal/VCard Website Template</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800|Playfair+Display:,300, 400, 700" rel="stylesheet" />
      <link rel="stylesheet" href="css/bootstrap.css" />
      <link rel="stylesheet" href="css/animate.css" />
      <link rel="stylesheet" href="css/owl.carousel.min.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/mediaelement@4.2.7/build/mediaelementplayer.min.css" />
      <link rel="stylesheet" href="fonts/ionicons/css/ionicons.min.css" />
      <link rel="stylesheet" href="fonts/fontawesome/css/font-awesome.min.css" />
      {/* Theme Style */}
      <link rel="stylesheet" href="css/style.css" />
        </div>

      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="js/jquery-3.2.1.min.js"></script>
        <script src="js/popper.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/owl.carousel.min.js"></script>
        <script src="js/jquery.waypoints.min.js"></script>
        <script src="js/jquery.countdown.min.js"></script>
        <script src="js/main.js"></script>
      </body>
    </Html>
  )
}