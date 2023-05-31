import Navbar from "../Navbar";
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, Col, Row, Button, Text } from "@nextui-org/react";

import './home.css'

//import das imagens
import image from '../../img/img1.jpg';
import image1 from '../../img/img2.jpg';
import image2 from '../../img/img3.jpg';
import image3 from '../../img/img4.jpg';
import image4 from '../../img/img5.jpg';
import image5 from '../../img/img6.jpg';


function Home() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <body>

      <Navbar />

      <Slider {...settings}>
        <div>
          <img src={image} alt={'primeira imgem'} style={{ width: '100%', height: '800px' }} />
        </div>
        <div>
          <img src={image1} alt={'primeira imgem'} style={{ width: '100%', height: '800px' }} />
        </div>
        <div>
          <img src={image2} alt={'primeira imgem'} style={{ width: '100%', height: '800px' }} />
        </div>
        <div>
          <img src={image3} alt={'primeira imgem'} style={{ width: '100%', height: '800px' }} />
        </div>
        <div>
          <img src={image4} alt={'primeira imgem'} style={{ width: '100%', height: '800px' }} />
        </div>
        <div>
          <img src={image5} alt={'primeira imgem'} style={{ width: '100%', height: '800px' }} />
        </div>
      </Slider>
      <div className="cards">
        <Card css={{ w: "400px", h: "400px", mt: "35px" }}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
                Your day your way
              </Text>
              <Text h3 color="white">
                Your checklist for better sleep
              </Text>
            </Col>
         
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src="https://nextui.org/images/card-example-5.jpeg"
              objectFit="cover"
              width="100%"
              height="100%"
              alt="Relaxing app background"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#0f111466",
              borderTop: "$borderWeights$light solid $gray800",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row>
              <Col>
                <Row>
                  <Col span={3}>
                    <Card.Image
                      src="https://nextui.org/images/breathing-app-icon.jpeg"
                      css={{ bg: "black", br: "50%" }}
                      height={40}
                      width={40}
                      alt="Breathing app icon"
                    />
                  </Col>
                  <Col>
                    <Text color="#d1d1d1" size={12}>
                      Titulo do filme
                    </Text>
                    <Text color="#d1d1d1" size={12}>
                      Informações do filme
                    </Text>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row justify="flex-end">
                  <Button
                    flat
                    auto
                    rounded
                    css={{ color: "#94f9f0", bg: "#94f9f026" }}
                  >
                    <Text
                      css={{ color: "inherit" }}
                      size={12}
                      weight="bold"
                      transform="uppercase"
                    >
                      Get App
                    </Text>
                  </Button>
                </Row>
              </Col>
            </Row>
          </Card.Footer>
        </Card>

        <Card css={{ w: "400px", h: "400px", mt: "35px" }}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
                Your day your way
              </Text>
              <Text h3 color="white">
                Your checklist for better sleep
              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src="https://nextui.org/images/card-example-5.jpeg"
              objectFit="cover"
              width="100%"
              height="100%"
              alt="Relaxing app background"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#0f111466",
              borderTop: "$borderWeights$light solid $gray800",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row>
              <Col>
                <Row>
                  <Col span={3}>
                    <Card.Image
                      src="https://nextui.org/images/breathing-app-icon.jpeg"
                      css={{ bg: "black", br: "50%" }}
                      height={40}
                      width={40}
                      alt="Breathing app icon"
                    />
                  </Col>
                  <Col>
                    <Text color="#d1d1d1" size={12}>
                      Titulo do filme
                    </Text>
                    <Text color="#d1d1d1" size={12}>
                      Informações do filme
                    </Text>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row justify="flex-end">
                  <Button
                    flat
                    auto
                    rounded
                    css={{ color: "#94f9f0", bg: "#94f9f026" }}
                  >
                    <Text
                      css={{ color: "inherit" }}
                      size={12}
                      weight="bold"
                      transform="uppercase"
                    >
                      Get App
                    </Text>
                  </Button>
                </Row>
              </Col>
            </Row>
          </Card.Footer>
        </Card>

        <Card css={{ w: "400px", h: "400px", mt: "35px" }}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
                Your day your way
              </Text>
              <Text h3 color="white">
                Your checklist for better sleep
              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src="https://nextui.org/images/card-example-5.jpeg"
              objectFit="cover"
              width="100%"
              height="100%"
              alt="Relaxing app background"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#0f111466",
              borderTop: "$borderWeights$light solid $gray800",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row>
              <Col>
                <Row>
                  <Col span={3}>
                    <Card.Image
                      src="https://nextui.org/images/breathing-app-icon.jpeg"
                      css={{ bg: "black", br: "50%" }}
                      height={40}
                      width={40}
                      alt="Breathing app icon"
                    />
                  </Col>
                  <Col>
                    <Text color="#d1d1d1" size={12}>
                      Titulo do filme
                    </Text>
                    <Text color="#d1d1d1" size={12}>
                      Informações do filme
                    </Text>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row justify="flex-end">
                  <Button
                    flat
                    auto
                    rounded
                    css={{ color: "#94f9f0", bg: "#94f9f026" }}
                  >
                    <Text
                      css={{ color: "inherit" }}
                      size={12}
                      weight="bold"
                      transform="uppercase"
                    >
                      Get App
                    </Text>
                  </Button>
                </Row>
              </Col>
            </Row>
          </Card.Footer>
        </Card>

      </div>


      <footer className="footer">
        <p className="footer-by">
          A project by{" "}
          <a
            href="https://twitter.com/erdemmkarakas"
            rel="noopener"
            className="small-link"
          >
            Erdem Karakaş
          </a>
          <a
            href="https://twitter.com/erdemmkarakas"
            rel="noopener"
            target="_blank"
            className="no-link icon-twitter"
            aria-label="Follow me on Twitter"
          ></a>
        </p>
      </footer>
    </body>
  );
}

export default Home;
