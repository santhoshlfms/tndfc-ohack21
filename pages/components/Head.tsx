import NextHead from "next/head";

interface Props {
  desc?: string;
  title?: string;
}

const AppName = "TNDFC";

export default function Head(props: Props): JSX.Element {
  const { desc, title } = props;

  return (
    <NextHead>
      <title>{title ?? AppName}</title>

      <link rel="icon" href="/favicon.ico" />
      
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback"></link>
      <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"></link>
      <link rel="stylesheet" href="../plugins/fontawesome-free/css/all.min.css" />
      <link rel="stylesheet" href="../css/adminlte.css" />

     
    </NextHead>
  );
}