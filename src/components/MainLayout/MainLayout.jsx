import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { Outlet } from "react-router"
import styles from "./MainLayout.module.scss"

function MainLayout() {
  return (
    <div className={styles.main}>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainLayout