import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import NavBar from "../../Components/common/NavBar/NavBar";
import Footer from "../../Components/layout/Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
// import required modules
import { Scrollbar } from "swiper/modules";

import "./Articles.css";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Articles() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab className="tab" label="اخبار" {...a11yProps(0)} />
              <Tab className="tab" label="اخبار خودرو" {...a11yProps(1)} />
              <Tab className="tab" label="شرایط فروش" {...a11yProps(2)} />
              <Tab className="tab" label="راهنمای بازار" {...a11yProps(3)} />
              <Tab className="tab" label="موتورسیکلت" {...a11yProps(4)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Swiper
              scrollbar={{
                hide: false,
              }}
              modules={[Scrollbar]}
              className="mySwiper Articles__slider-wrapper"
            >
              <SwiperSlide className="Articles__slide">
                <div className="Articles__slide-right">
                  <p className="Articles__slide-smal-title">با فناوری بیشتر و رنگ زرد درخشان!</p>
                  <h2 className="Articles__slide-title">معرفی نیسان جوک 2024</h2>
                  <p className="Articles__slide-text">نیسان جوک به عنوان یکی از خودروهای غیربریتانیایی که در این کشور مونتاژ می­‌شود، با گذشت نزدیک به 5 سال از تولد نسل دوم، ....</p>
                </div>
                <div className="Articles__slide-left">
                  <img src="../img/article-6.webp" alt="article" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="Articles__slide">
                <div className="Articles__slide-right">
                  <p className="Articles__slide-smal-title">با فناوری بیشتر و رنگ زرد درخشان!</p>
                  <h2 className="Articles__slide-title">ملاقات با فورد ماستنگ Mach-1 مدل 1973</h2>
                  <p className="Articles__slide-text">نیسان جوک به عنوان یکی از خودروهای غیربریتانیایی که در این کشور مونتاژ می­‌شود، با گذشت نزدیک به 5 سال از تولد نسل دوم، ....</p>
                </div>
                <div className="Articles__slide-left">
                  <img src="../img/article-7.webp" alt="article" />
                </div>
              </SwiperSlide>
            </Swiper>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            سلام Two
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Item Three
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            Item Three
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            Item Three
          </CustomTabPanel>
        </Box>
      </div>
      <Footer />
    </>
  );
}
