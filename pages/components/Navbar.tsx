import { getAuth, signOut } from "firebase/auth";
import { useAuth } from "../../providers/AuthProvider";
import router from "next/router";
import Image from "next/image";
import Link from "next/link";

export default function Navbar(): JSX.Element {
  const { currentUser } = useAuth();
  const handle = () => {
    console.log("handle");
  };

  const handleLogout = async () => {
    await signOut(getAuth());
    router.replace("/");
  };

  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link href="#">
            <a className="nav-link" data-widget="pushmenu" role="button">
              <Image src="/img/original_logo.jpeg" layout='fill'/>
            </a>
          </Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link href="/dashboard">
            <a className="nav-link">Home</a>
          </Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link href="/dashboard/users">
            <a className="nav-link">Users</a>
          </Link>
        </li>
      </ul>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link href="#">
            <a
              className="nav-link"
              data-widget="control-sidebar"
              data-slide="true"
              role="button"
              onClick={handleLogout}
            >
              <i className="fas fa-sign-out-alt"></i>
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="#">
            <a className="nav-link" role="button" onClick={handle}>
              <i className="fas fa-th-large"></i>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
