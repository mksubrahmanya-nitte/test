// ??$$$
const fs = require('fs');
const path = require('path');

const htmlContent = `
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/png" sizes="32x32" href="images/favicon.png">
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/swiper-bundle.min.css" />
    <link rel="stylesheet" href="font-awesome-5/css/all.min.css">
    <link rel="stylesheet" href="css/magnific-popup.css">
    <link rel="stylesheet" href="css/style.css">
    <title>JG University - News</title>
</head>
<body>
    <div class="loader">
    </div>
    <script src="include/nav.js"></script>
    <section class="banner-inner m-top">
        <img class="img-fluid" src="images/news/banner.jpg" alt="News">
        <div class="inner-text">
            <h1 class="mb-0">News</h1>
        </div>
    </section>
		<section class="padding news gray-bg">
      <div class="container">
        <h1>JG University hosts photography workshop for students - 10th & 12th September, 2024</h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/10-09-24.jpeg">
                  <img src="images/news/10-09-24.jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
			  <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/12-09-24.jpeg">
                  <img src="images/news/12-09-24.jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
			 
			  
           
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>
	
	
	
	
	
	
	
	
	
	
	<section class="padding news gray-bg">
      <div class="container">
        <h1>JG YCF 2.0 - 8th, 10th,11th & 12th September, 2024</h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/11-09-24.jpeg">
                  <img src="images/news/11-09-24.jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
			  <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/10-09-24-1.jpeg">
                  <img src="images/news/10-09-24-1.jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
			  <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/08-09-24.jpeg">
                  <img src="images/news/08-09-24.jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
			  <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/12-09-24(1).jpeg">
                  <img src="images/news/12-09-24(1).jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
			  
			
			 
           
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>
	
	
	
	
	
	
	
	
	
	
		<section class="padding news gray-bg">
      <div class="container">
        <h1>Dr. MP Chandran, President - JG University on Teachers Day - 5th September, 2024</h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/WhatsApp Image 2024-09-05 at 9.11.57 AM (1).jpeg">
                  <img src="images/news/WhatsApp Image 2024-09-05 at 9.11.57 AM (1).jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
			  
			
			 
           
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	<section class="padding news gray-bg">
      <div class="container">
        <h1>Expert Session on Cyber Security held at JG University - 24th, 29th & 31st August, 2024</h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/24-08-24.jpeg">
                  <img src="images/news/24-08-24.jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
			  <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/31-08-24.jpeg">
                  <img src="images/news/31-08-24.jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
			  <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/29-08-24.jpeg">
                  <img src="images/news/29-08-24.jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
			
			 
           
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>
	
	
	
	
	
	
	
	
	<section class="padding news gray-bg">
      <div class="container">
        <h1>JG University celebrates National Youth Day with tree plantation - 13th & 14th August, 2024</h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/14-08-24.jpeg">
                  <img src="images/news/14-08-24.jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
			  <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/13-08-24(1).jpeg">
                  <img src="images/news/13-08-24(1).jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
			
			 
           
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>
	
	
	
	
	
	
	
	
	
	
	
		<section class="padding news gray-bg">
      <div class="container">
        <h1>JG University's School of Computing hosts Tech Cast 2.0 - 6th August, 2024</h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/07-08-24.jpeg">
                  <img src="images/news/07-08-24.jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
			  <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/06-0824.jpeg">
                  <img src="images/news/06-0824.jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
			
			 
           
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>
	
	
	
	
	
	
	
	
	
	<section class="padding news gray-bg">
      <div class="container">
        <h1>National Flag Adoption Day seminar at JG University - 23rd July, 2024</h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/WhatsApp Image 2024-07-24 at 10.57.38 AM (1).jpeg">
                  <img src="images/news/WhatsApp Image 2024-07-24 at 10.57.38 AM (1).jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
			  <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/WhatsApp Image 2024-07-24 at 10.57.38 AM.jpeg">
                  <img src="images/news/WhatsApp Image 2024-07-24 at 10.57.38 AM.jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
			
			 
           
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>
	
	
	
	
	
	
	
	
	
	
	<section class="padding news gray-bg">
      <div class="container">
        <h1>B.Tech Programme delivered by IIT-IIM Graduates at JG University - 15th June, 2024</h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/15-06-24.jpeg">
                  <img src="images/news/15-06-24.jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
			
			 
           
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>
	
	
	
	
	
	
	
	
	
	
	<section class="padding news gray-bg">
      <div class="container">
        <h1>Importance of Voting' Seminar held at JG University for its students - 29th April, 2024</h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/29-04-24 DB.jpeg">
                  <img src="images/news/29-04-24 DB.jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
			<div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/29-04-24.jpeg">
                  <img src="images/news/29-04-24.jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
			 
           
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>
	
	
	
	
	
	
	
	
	
	<section class="padding news gray-bg">
      <div class="container">
        <h1>JG University's Teacher Training Program - 26th April, 2024 </h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/26-04-24 GS.jpeg">
                  <img src="images/news/26-04-24 GS.jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
			
			 
           
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>
	
	
	
	
	<section class="padding news gray-bg">
      <div class="container">
        <h1>JG University at Gandhi Ashram on World Heritage Day - 26th Arpil, 2024</h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/23-04-24 DB.jpeg">
                  <img src="images/news/23-04-24 DB.jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
			<div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/26-04-24 mirror.jpeg">
                  <img src="images/news/26-04-24 mirror.jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
			 
           
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>
	
	
	
	
	
	
	
	<section class="padding news gray-bg">
      <div class="container">
        <h1>JG University Students play new age and traditional games - 19th March, 2024</h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/17-03-24.jpeg">
                  <img src="images/news/17-03-24.jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
			<div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/17-03-24(1).jpeg">
                  <img src="images/news/17-03-24(1).jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
			 
           
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>
	
	
	
	
	
	
	<section class="padding news gray-bg">
      <div class="container">
        <h1>JG University Celebrated Women's Day by listening to Retired Principal of SR Mehta Arts College, Dr. Indira Nityanandam - 9th March, 2024</h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/09-03-24.jpeg">
                  <img src="images/news/09-03-24.jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
			 
           
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>
	
	
	
	
	
	
	
	
	
	<section class="padding news gray-bg">
      <div class="container">
        <h1>In celebration of International Women's Day, JG University organized a Cyclothon exclusively for girl students - 8th March, 2024</h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/08-03-24(1).jpeg">
                  <img src="images/news/02-03-24.jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
			<div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/08-03-24.jpeg">
                  <img src="images/news/08-03-24.jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
			 
           
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>
	
	
	
	
	
	
	
	<section class="padding news gray-bg">
      <div class="container">
        <h1>iMBA and LL.B. students are the champions of the JG University's Inter College Cricket Tournament - 2nd March, 2024</h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/02-03-24.jpeg">
                  <img src="images/news/02-03-24.jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
			 
           
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>
	
	
	
	
	
	
	
	
	
	
	<section class="padding news gray-bg">
      <div class="container">
        <h1>JG University's Inter-College Cricket Tournament - 27th February, 2024</h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/27-02-24.jpeg">
                  <img src="images/news/27-02-24.jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
			 
           
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>
	
	
	<section class="padding news gray-bg">
      <div class="container">
        <h1>JG University's Inter-College Cricket Tournament - 17th February, 2024</h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/17-02-24.jpeg">
                  <img src="images/news/17-02-24.jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
			 
           
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>
	
	
	
	
	<section class="padding news gray-bg">
      <div class="container">
        <h1>Road safety and drug awareness rally - 1st February, 2024</h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/01-02-24.jpeg">
                  <img src="images/news/01-02-24.jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
			 
           
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>
	
	
	
	<section class="padding news gray-bg">
      <div class="container">
        <h1>Patangotsav'24 at JG University - 14th January, 2024</h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/14-01-24.jpeg">
                  <img src="images/news/14-01-24.jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
			<div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/14-01-24(2).jpeg">
                  <img src="images/news/14-01-24(2).jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>  
			  <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/14-01-24(1).jpeg">
                  <img src="images/news/14-01-24(1).jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>  
           
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>
	
	
	<section class="padding news gray-bg">
      <div class="container">
        <h1>Techno School Summit 2.0 - 5th January, 2024</h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/5-1-24.jpeg">
                  <img src="images/news/5-1-24.jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
           
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>
	
	
	
	<section class="padding news gray-bg">
      <div class="container">
        <h1>JG University turns vibrant with yearend festival - 2nd January, 2024</h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/02-01-24.jpeg">
                  <img src="images/news/02-01-24.jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
           
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>
	
	
	<section class="padding news gray-bg">
      <div class="container">
        <h1>Joyous Gathering @JG, welcoming 2024 - 31st December, 2023</h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/31-12-23.jpeg">
                  <img src="images/news/31-12-23.jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
           
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>
	
	<section class="padding news gray-bg">
      <div class="container">
        <h1>Students dressing up as Bollywood character for ramp walk at Joyous Gathering @JG - 29th December, 2023</h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/29-12-23.jpeg">
                  <img src="images/news/29-12-23.jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
           
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>
	
	
	<section class="padding news gray-bg">
      <div class="container">
        <h1>JG University organised a Techno School Summit - 28th December, 2023</h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/28-12-23(!).jpeg">
                  <img src="images/news/28-12-23(!).jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/28-12-23.jpeg">
                  <img src="images/news/28-12-23.jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>
	
	<section class="padding news gray-bg">
      <div class="container">
        <h1>Connecting with mentally challenged boys at Parakash High School - 23rd December,2023</h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/23-12-23.jpeg">
                  <img src="images/news/23-12-23.jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
            
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>

	<section class="padding news gray-bg">
      <div class="container">
        <h1>Seminar on the latest trends & innovations of the industry - 15th December, 2023</h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/15-12-23(3).jpeg">
                  <img src="images/news/15-12-23(3).jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
            
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>
	
	<section class="padding news gray-bg">
      <div class="container">
        <h1>'Riding The TechWave' Seminar at JG University - 15th December, 2023</h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/15-12-23(2).jpeg">
                  <img src="images/news/15-12-23(2).jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
            
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>
	<section class="padding news gray-bg">
      <div class="container">
        <h1>JG University organised a seminar on Voting and Public Rights for its students - 10th December, 2023</h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/10-12-23.jpeg">
                  <img src="images/news/10-12-23.jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
            
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>
	<section class="padding news gray-bg">
      <div class="container">
        <h1>Apart from Syllabus, Students are provided practical knowledge by focusing on soft skill development program | Organising Industrial Visits for Practical Knowledge - 9th December, 2023</h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/9-12-23.jpeg">
                  <img src="images/news/9-12-23.jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
            
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>
	<section class="padding news gray-bg">
      <div class="container">
        <h1>Exam stress hits boys harder than girls reveals JG University's study - 29th November, 2023</h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/29-11-23.jpeg">
                  <img src="images/news/29-11-23.jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
            
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>
	<section class="padding news gray-bg">
      <div class="container">
        <h1>JG University conducted a seminar with DGP (Police Reform) IPS Anil Pratham on 'Crime Prevention and Reform Initiatives' - 29th November, 2023</h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/29-11-23-1.jpeg">
                  <img src="images/news/29-11-23-1.jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
            
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>
	<section class="padding news gray-bg">
      <div class="container">
        <h1>JG University organises industrial visit for its students - 23rd November, 2023</h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/WhatsApp Image 2023-11-23 at 9.35.39 AM.jpeg">
                  <img src="images/news/WhatsApp Image 2023-11-23 at 9.35.39 AM.jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/WhatsApp Image 2023-11-23 at 9.35.38 AM.jpeg">
                  <img src="images/news/WhatsApp Image 2023-11-23 at 9.35.38 AM.jpeg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
           
            
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>
	
	<section class="padding news gray-bg">
      <div class="container">
        <h1>JG University organises Industrial visit for its students - 22nd November, 2023</h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/WhatsApp Image 2023-11-22 at 11.46.57 AM.jpeg">
                  <img src="images/news/WhatsApp Image 2023-11-22 at 11.46.57 AM.jpeg" class="project-img-gallery img-fluid" alt="JG University organises Industrial visit for its students - 22nd November, 2023">
               </a>
             </div>
            </div>
			  <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/WhatsApp Image 2023-11-22 at 11.46.56 AM.jpeg">
                  <img src="images/news/WhatsApp Image 2023-11-22 at 11.46.56 AM.jpeg" class="project-img-gallery img-fluid" alt="JG University organises Industrial visit for its students - 22nd November, 2023">
               </a>
             </div>
            </div>
			   <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/WhatsApp Image 2023-11-22 at 9.01.04 AM.jpeg">
                  <img src="images/news/WhatsApp Image 2023-11-22 at 9.01.04 AM.jpeg" class="project-img-gallery img-fluid" alt="JG University organises Industrial visit for its students - 22nd November, 2023">
               </a>
             </div>
            </div>
            
           
            
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>
	
	<section class="padding news gray-bg">
      <div class="container">
        <h1>Financial Derivatives and Risk Management Seminar by Mr. Paritosh Trivedi - 8th November, 2023</h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/DIvya Bhaskar_Ahm_JG_08.11.23_pg03.jpg">
                  <img src="images/news/DIvya Bhaskar_Ahm_JG_08.11.23_pg03.jpg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
			  <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/Gujarat samachar 08.11.23.jpg">
                  <img src="images/news/Gujarat samachar 08.11.23.jpg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
            
           
            
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>
	
	
	<section class="padding news gray-bg">
      <div class="container">
        <h1>Diwali Fusion Shopping Fest at JG University - 12th November, 2023</h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/Divya Bhaskar_Ahm_JG_12.11.23_pg02.jpg">
                  <img src="images/news/Divya Bhaskar_Ahm_JG_12.11.23_pg02.jpg" class="project-img-gallery img-fluid" alt="JG University organises industrial visit for its students - 23rd November, 2023">
               </a>
             </div>
            </div>
            
           
            
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>
	
    <section class="padding news gray-bg">
      <div class="container">
        <h1>Cleanliness Drive by JG University's Students - 2nd November, 2023</h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/ahmedabad-Mirror_Ahm_JG_02-11-23_pg07.jpg">
                  <img src="images/news/ahmedabad-Mirror_Ahm_JG_02-11-23_pg07.jpg" class="project-img-gallery img-fluid" alt="JG University and IBS Skills Build LOU">
               </a>
             </div>
            </div>
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/gujarat-Samachar_Ahm_JG_02-11-23_pg02.jpg">
                  <img src="images/news/gujarat-Samachar_Ahm_JG_02-11-23_pg02.jpg" class="project-img-gallery img-fluid" alt="JG University and IBS Skills Build LOU">
               </a>
             </div>
            </div>
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/divya-Bhaskar_Ahm_JG_03-11-23_pg02.jpg">
                  <img src="images/news/divya-Bhaskar_Ahm_JG_03-11-23_pg02.jpg" class="project-img-gallery img-fluid" alt="JG University and IBS Skills Build LOU">
               </a>
             </div>
            </div>
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/Sandesh_Ahm_JG_03-11-23_pg04.jpg">
                  <img src="images/news/Sandesh_Ahm_JG_03-11-23_pg04.jpg" class="project-img-gallery img-fluid" alt="JG University and IBS Skills Build LOU">
               </a>
             </div>
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>
    <section class="padding news gray-bg">
      <div class="container">
        <h1>JG University and IBS Skills Build LOU - 26th & 27th October, 2023</h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/ibs1.jpg">
                  <img src="images/news/ibs1.jpg" class="project-img-gallery img-fluid" alt="JG University and IBS Skills Build LOU">
               </a>
             </div>
            </div>
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/ibs2.jpg">
                  <img src="images/news/ibs2.jpg" class="project-img-gallery img-fluid" alt="JG University and IBS Skills Build LOU">
               </a>
             </div>
            </div>
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/ibs3.jpg">
                  <img src="images/news/ibs3.jpg" class="project-img-gallery img-fluid" alt="JG University and IBS Skills Build LOU">
               </a>
             </div>
            </div>

          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>
    <section class="padding news">
      <div class="container">
        <h1>JG University's Jordaar Garba - 21st October, 2023</h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/garba1.jpg">
                  <img src="images/news/garba1.jpg" class="project-img-gallery img-fluid" alt="divya bhaskar jg jordar garba">
               </a>
             </div>
            </div>
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/garba2.jpg">
                  <img src="images/news/garba2.jpg" class="project-img-gallery img-fluid" alt="jg jordar garba gujarat samachar">
               </a>
             </div>
            </div>
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/garba3.jpg">
                  <img src="images/news/garba3.jpg" class="project-img-gallery img-fluid" alt="NavGujarat jg jordar garba">
               </a>
             </div>
            </div>
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/garba4.jpg">
                  <img src="images/news/garba4.jpg" class="project-img-gallery img-fluid" alt="Sandesh 21-10-23">
               </a>
             </div>
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>
    <section class="padding news gray-bg">
      <div class="container">
        <h1>JG University's Photography Club Workshop - 20th September, 2023</h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/photography-workshop1.jpg">
                  <img src="images/news/photography-workshop1.jpg" class="project-img-gallery img-fluid" alt="Photography Club Workshop">
               </a>
             </div>
            </div>
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/photography-workshop2.jpg">
                  <img src="images/news/photography-workshop2.jpg" class="project-img-gallery img-fluid" alt="Photography Club Workshop">
               </a>
             </div>
            </div>
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/photography-workshop3.jpg">
                  <img src="images/news/photography-workshop3.jpg" class="project-img-gallery img-fluid" alt="Photography Club Workshop">
               </a>
             </div>
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>
    <section class="padding news">
      <div class="container">
        <h1>Traffic Safety Awareness Seminar at JG University - 28th September, 2023</h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/traffic-safety-awareness.jpg">
                  <img src="images/news/traffic-safety-awareness.jpg" class="project-img-gallery img-fluid" alt="traffic-safety-awareness">
               </a>
             </div>
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>
    <section class="padding news gray-bg">
      <div class="container">
        <h1>JG University's first edition of youth connect fest - 14th September, 2023</h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/first-edition.jpg">
                  <img src="images/news/first-edition.jpg" class="project-img-gallery img-fluid" alt="first edition">
               </a>
             </div>
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>
    <section class="padding news">
        <div class="container">
          <h1>JG Youth Connect Fest 1.0 - 9th September, 2023</h1>
          <div class="swiper medis-slide owl-sd gallery2 mt-4">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="wow fadeIn">
                  <a  href="images/news/34.jpg">
                    <img src="images/news/34.jpg" class="project-img-gallery img-fluid" alt="JG YCF 1.0 - 9th September, 2023">
                 </a>
               </div>
              </div>
              <div class="swiper-slide">
                <div class="wow fadeIn">
                  <a  href="images/news/35.jpg">
                    <img src="images/news/35.jpg" class="project-img-gallery img-fluid" alt="JG YCF 1.0 - 9th September, 2023">
                 </a>
               </div>
              </div>
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/student-activities/7a.JPG">
                  <img src="images/student-activities/7a.JPG" class="project-img-gallery img-fluid" alt="JG YCF 1.0 - 9th September, 2023">
               </a>
             </div>
            </div>
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/student-activities/9a.JPG">
                  <img src="images/student-activities/9a.JPG" class="project-img-gallery img-fluid" alt="JG YCF 1.0 - 9th September, 2023">
               </a>
             </div>
            </div>
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/student-activities/14a.JPG">
                  <img src="images/student-activities/14a.JPG" class="project-img-gallery img-fluid" alt="JG YCF 1.0 - 9th September, 2023">
               </a>
             </div>
            </div>

            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            </div>
        </div>
    </section>
    <section class="padding news gray-bg">
        <div class="container">
          <h1>A Future Dream of Creating a Green Field University - Dr. Achyut Dani - 11th September, 2023</h1>
          <div class="swiper medis-slide owl-sd gallery2 mt-4">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="wow fadeIn">
                  <a  href="images/news/33.jpg">
                    <img src="images/news/33.jpg" class="project-img-gallery img-fluid" alt="JG YCF 1.0 - 9th September, 2023">
                 </a>
               </div>
              </div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            </div>
        </div>
    </section>
    <section class="padding news">
        <div class="container">
          <h1>Faculty Development Programme</h1>
          <div class="swiper medis-slide owl-sd gallery2 mt-4">
            <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/30.jpg">
                  <img src="images/news/30.jpg" class="project-img-gallery img-fluid" alt="Faculty Development Programme">
               </a>
             </div>
            </div>
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/31.jpg">
                  <img src="images/news/31.jpg" class="project-img-gallery img-fluid" alt="Faculty Development Programme">
               </a>
             </div>
            </div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            </div>
        </div>
    </section>
    <section class="padding news gray-bg">
        <div class="container">
          <h1>'Woman empowered is nation empowered’ - 8th april, 2023</h1>
          <div class="swiper medis-slide owl-sd gallery2 mt-4">
            <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/28.jpg">
                  <img src="images/news/28.jpg" class="project-img-gallery img-fluid" alt="Woman empowered is nation empowered">
               </a>
             </div>
            </div>
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/29.jpg">
                  <img src="images/news/29.jpg" class="project-img-gallery img-fluid" alt="Woman empowered is nation empowered">
               </a>
             </div>
            </div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            </div>
        </div>
    </section>
    <section class="padding news">
        <div class="container">
          <h1>Placement Drive at JG University, 5th april, 2023</h1>
          <div class="swiper medis-slide owl-sd gallery2 mt-4">
            <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/25.jpg">
                  <img src="images/news/25.jpg" class="project-img-gallery img-fluid" alt="Placement Drive at JG University, 5th april, 2022">
               </a>
             </div>
            </div>
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/26.jpg">
                  <img src="images/news/26.jpg" class="project-img-gallery img-fluid" alt="Placement Drive at JG University, 5th april, 2022">
               </a>
             </div>
            </div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            </div>
        </div>
    </section>
    <section class="padding news gray-bg">
        <div class="container">
          <h1>JG University Free Psychometric Test, 5th april, 2023</h1>
          <div class="swiper medis-slide owl-sd gallery2 mt-4">
            <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/27.jpg">
                  <img src="images/news/27.jpg" class="project-img-gallery img-fluid" alt="JG University Free Psychometric Test, 5th april, 2022">
               </a>
             </div>
            </div>
             </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            </div>
        </div>
    </section>
    <section class="padding news">
        <div class="container">
          <h1>Edu Skill Tech Expo - June 12, 2022</h1>
          <div class="swiper medis-slide owl-sd gallery2 mt-4">
            <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/15.jpg">
                  <img src="images/news/15.jpg" class="project-img-gallery img-fluid" alt="news">
               </a>
             </div>
            </div>
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/16.jpg">
                  <img src="images/news/16.jpg" class="project-img-gallery img-fluid" alt="news">
               </a>
             </div>
            </div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            </div>
        </div>
    </section>
    <section class="padding news gray-bg">
        <div class="container">
          <h1>Interactive Panel Discussion-AMA - June 6, 2022</h1>
          <div class="swiper medis-slide owl-sd gallery2 mt-4">
            <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/2.jpg">
                  <img src="images/news/2.jpg" class="project-img-gallery img-fluid" alt="news">
               </a>
             </div>
            </div>
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/3.jpg">
                  <img src="images/news/3.jpg" class="project-img-gallery img-fluid" alt="news">
               </a>
             </div>
            </div>
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/4.jpg">
                  <img src="images/news/4.jpg" class="project-img-gallery img-fluid" alt="news">
               </a>
             </div>
            </div>
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/22a.jpg">
                  <img src="images/news/22a.jpg" class="project-img-gallery img-fluid" alt="news">
               </a>
             </div>
            </div>
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/9.jpg">
                  <img src="images/news/9.jpg" class="project-img-gallery img-fluid" alt="news">
               </a>
             </div>
            </div>
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/7.jpg">
                  <img src="images/news/7.jpg" class="project-img-gallery img-fluid" alt="news">
               </a>
             </div>
            </div>
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/8.jpg">
                  <img src="images/news/8.jpg" class="project-img-gallery img-fluid" alt="news">
               </a>
             </div>
            </div>
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/6.jpg">
                  <img src="images/news/6.jpg" class="project-img-gallery img-fluid" alt="news">
               </a>
             </div>
            </div>
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/10.jpg">
                  <img src="images/news/10.jpg" class="project-img-gallery img-fluid" alt="news">
               </a>
             </div>
            </div>
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/11.jpg">
                  <img src="images/news/11.jpg" class="project-img-gallery img-fluid" alt="news">
               </a>
             </div>
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
            </div>
        </div>
    </section>
    <section class="padding news">
        <div class="container">
          <h1>Modi@20 Dream Meet - September 13, 2022</h1>
          <div class="swiper medis-slide owl-sd gallery2 mt-4">
            <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/19.jpg">
                  <img src="images/news/19.jpg" class="project-img-gallery img-fluid" alt="news">
               </a>
             </div>
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
            </div>
        </div>
    </section>
    <section class="padding news gray-bg">
        <div class="container">
          <h1>NEP Workshop by JG University - September 16, 2022</h1>
          <div class="swiper medis-slide owl-sd gallery2 mt-4">
            <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/1.jpg">
                  <img src="images/news/1.jpg" class="project-img-gallery img-fluid" alt="news">
               </a>
             </div>
            </div>
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/17.jpg">
                  <img src="images/news/17.jpg" class="project-img-gallery img-fluid" alt="news">
               </a>
             </div>
            </div>
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/18.jpg">
                  <img src="images/news/18.jpg" class="project-img-gallery img-fluid" alt="news">
               </a>
             </div>
            </div>
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/20.jpg">
                  <img src="images/news/20.jpg" class="project-img-gallery img-fluid" alt="news">
               </a>
             </div>
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
            </div>
        </div>
    </section>
    <section class="padding news">
        <div class="container">
          <h1>Youth GST Conclave - 2022</h1>
          <div class="swiper medis-slide owl-sd gallery2 mt-4">
            <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/12.jpg">
                  <img src="images/news/12.jpg" class="project-img-gallery img-fluid" alt="news">
               </a>
             </div>
            </div>
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/13.jpg">
                  <img src="images/news/13.jpg" class="project-img-gallery img-fluid" alt="news">
               </a>
             </div>
            </div>
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/14.jpg">
                  <img src="images/news/14.jpg" class="project-img-gallery img-fluid" alt="news">
               </a>
             </div>
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
        </div>
    </section>
    <section class="padding news gray-bg">
        <div class="container">
          <h1>JGUNI M.Com Students at VSACS lab - December 09, 2022</h1>
          <div class="swiper medis-slide owl-sd gallery2 mt-4">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/21.jpg">
                  <img src="images/news/21.jpg" class="project-img-gallery img-fluid" alt="news">
               </a>
             </div>
            </div>
            <div class="swiper-slide">
              <div class="wow fadeIn">
                <a  href="images/news/5.jpg">
                  <img src="images/news/5.jpg" class="project-img-gallery img-fluid" alt="news">
               </a>
             </div>
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
            </div>
        </div>
    </section>
    <section class="padding news">
      <div class="container">
        <h1>Student's career counseling by JGUNI at Konnect fair</h1>
        <div class="swiper medis-slide owl-sd gallery2 mt-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
            <div class="wow fadeIn">
              <a  href="images/news/24.jpg">
                <img src="images/news/24.jpg" class="project-img-gallery img-fluid" alt="news">
             </a>
           </div>
          </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
          </div>
      </div>
  </section>
  <section class="padding news gray-bg">
    <div class="container">
      <h1>JGUNI as a part of Collegedunia's Higher Education Summit</h1>
      <div class="swiper medis-slide owl-sd gallery2 mt-4">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
          <div class="wow fadeIn">
            <a  href="images/news/23.jpg">
              <img src="images/news/23.jpg" class="project-img-gallery img-fluid" alt="news">
           </a>
         </div>
        </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
        </div>
    </div>
</section>
</body>
</html>
`;

// Regex extraction
const sectionsRegex = /<section class="padding news(?: gray-bg)?">([\s\S]*?)<\/section>/g;
const newsItems = [];

let match;
while ((match = sectionsRegex.exec(htmlContent)) !== null) {
  const sectionContent = match[1];
  
  // Extract Title
  const titleMatch = sectionContent.match(/<h1>(.*?)<\/h1>/);
  if (!titleMatch) continue;
  const title = titleMatch[1].trim();
  
  // Extract Images
  const imgRegex = /href="(images\/.*?)"/g;
  const images = [];
  let imgMatch;
  while ((imgMatch = imgRegex.exec(sectionContent)) !== null) {
    images.push(imgMatch[1].trim());
  }
  
  newsItems.push({
    title,
    images: [...new Set(images)] // deduplicate
  });
}

// Generate typescript code content
const codeContent = `// ??$$$
export interface NewsItem {
  title: string;
  images: string[];
}

export const newsData: NewsItem[] = ${JSON.stringify(newsItems, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'src', 'data', 'news.ts'), codeContent);
console.log('Successfully wrote src/data/news.ts with ' + newsItems.length + ' news items.');
