import "./events.less";
import renderphoto from "./images/photo1.jpg"
import { useEffect, useState } from "react";
import { BackTop, Card } from "antd";
import { getAllHalls } from "../../Admin/actions/adminEventsActions";
import { useDispatch, useSelector } from "react-redux";
import { initialStatePropsEvents } from "./../../reducers/adminEventsReducer"
import { Link } from "react-router-dom";

const getHalls = async (dispatch: any) => {
  const resolve = getAllHalls();
  dispatch(resolve);
};

export const Event = () => {
  const [key, setKey] = useState("greatroom");

  const dispatch = useDispatch()
  const hall = useSelector((state: initialStatePropsEvents) => state.adminEvents.halls);

  useEffect(() => {
    window.scroll(0, 0)
    getHalls(dispatch)
    return () => window.scroll()
  }, [dispatch]);

  const tabListNoTitle = [
    {
      key: "greatroom",
      tab: "Great Room"
    },
    {
      key: "studio1",
      tab: "Studio 1"
    },
    {
      key: "studio2",
      tab: "Studio 2"
    },
    {
      key: "foyer3a",
      tab: "Foyer 3A"
    }, {
      key: "foyer3b",
      tab: "Foyer 3B"
    }, {
      key: "lounge",
      tab: "Lounge"
    }
  ];



  const contentListNoTitle: any = {

    greatroom: <span className="contentEvents">  <h1 style={{ fontSize: "60px" }}>{<div>{hall[0]?.name}</div>}</h1><img className="imgEventOk" style={{ width: "100%", objectFit: "cover" }} src={hall[0]?.image} alt="Img not found" /><br></br><br></br><p ></p ><p style={{ fontSize: "20px" }}>{hall[0]?.description}</p></span>,

    studio1: <span className="contentEvents">  <h1 style={{ fontSize: "60px" }}>{<div>{hall[1]?.name}</div>}</h1><img className="imgEventOk" style={{ width: "100%", objectFit: "cover" }} src={hall[1]?.image} alt="Img not found" /><br></br><br></br><p ></p ><p style={{ fontSize: "20px" }}>{hall[1]?.description}</p></span>,

    studio2: <span className="contentEvents">  <h1 style={{ fontSize: "60px" }}>{<div>{hall[2]?.name}</div>}</h1><img className="imgEventOk" style={{ width: "100%", objectFit: "cover" }} src={hall[2]?.image} alt="Img not found" /><br></br><br></br><p ></p ><p style={{ fontSize: "20px" }}>{hall[2]?.description}</p></span>,

    foyer3b: <span className="contentEvents">  <h1 style={{ fontSize: "60px" }}>{<div>{hall[3]?.name}</div>}</h1><img className="imgEventOk" style={{ width: "100%", objectFit: "cover" }} src={hall[3]?.image} alt="Img not found" /><br></br><br></br><p ></p ><p style={{ fontSize: "20px" }}>{hall[3]?.description}</p></span>,

    lounge: <span className="contentEvents">  <h1 style={{ fontSize: "60px" }}>{<div>{hall[4]?.name}</div>}</h1><img className="imgEventOk" style={{ width: "100%", objectFit: "cover" }} src={hall[4]?.image} alt="Img not found" /><br></br><br></br><p ></p ><p style={{ fontSize: "20px" }}>{hall[4]?.description}</p></span>,

    foyer3a: <span className="contentEvents">  <h1 style={{ fontSize: "60px" }}>{<div>{hall[5]?.name}</div>}</h1><img className="imgEventOk" style={{ width: "100%", objectFit: "cover" }} src={hall[5]?.image} alt="Img not found" /><br></br><br></br><p ></p ><p style={{ fontSize: "20px" }}>{hall[5]?.description}</p></span>,

  };

  const onTabChange = (key: any) => {
    setKey(key)
  };


  return (
    <div className="descriptionBackground">

      <img className="imageAccomodation" style={{ height: "500px" }} src={renderphoto} alt="Img not found" />
      <div className="eventsContainerGlobal">
        <div className="ActitleHotel">
          EVENTS
            </div>
        <h3 className="subtitle2">
          Dare To Do Meetings Differently
            </h3>
        <p className="description">
          Go longer at Miami Beach. Connect to clients and employees with fun, fresh conferences in one of nine distinct meeting rooms. Our Great Room borders excess with a bright foyer and an attached W Lounge for mingling and networking.  Illuminate your conference with ideal AV equipment such as wired and wireless Internet and LCD projectors. Our Talent includes on-site photographers with TV production services, perfect for capturing the highlights. Our meeting experts make sure to include Recess™, our playful activity menu that breaks up the monotony. Energize with custom catering and prepare for the next gathering at our Wired business center, offering translators, messenger delivery, copy and fax services and more in South Beach, Florida.
        </p>
        <div className="scrollAdviceEvents">Scroll horizontally to see more!</div>
        <Card className="CardEvent"
          tabList={tabListNoTitle}
          activeTabKey={key}
          tabBarExtraContent={<Link to="/events/quote">Make your appointment now!
            </Link>}
          onTabChange={(key) => {
            onTabChange(key);
          }}
        >
          {contentListNoTitle[key]}
        </Card>
      </div>
      <BackTop />
    </div>
  )
}

