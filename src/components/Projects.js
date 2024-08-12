import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div>
      <h1>Artworks
      </h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img src="https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/455034916_8052165854867605_3256711143104208253_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFjk_XTBef44DmB0yCr_vInCCPkkXcCWY8II-SRdwJZjzRxKRJ0D3sHuso2TfwwmD8j7d-mo8QFbfAD_hxOB5hW&_nc_ohc=TvGiQDdSWhUQ7kNvgF_wdA-&_nc_ht=scontent.fmnl4-3.fna&oh=00_AYCQcXoK54qk8wfdmBrkFXyjk1442A_1aneK5_F-2biC3g&oe=66BF7383" className="card-img-top" alt="Project 1" />
            <div className="card-body">
              <h5 className="card-title">Karina</h5>
              <p className="card-text">07/12/2024</p>
              <a href="https://www.threads.net/@ntnl_lg/post/C9SuXNashib?xmt=AQGz1NU_VU2JfLIzVCifPiDpEcqF7IO2W5x3BXgvx9SJXw" className="btn btn-primary">View Process</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img src="https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/455055030_8052165744867616_780455577748902324_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEIf2KDKZHOru-u-H4H4vMWJPV3LzEelPIk9XcvMR6U8v8Zh_NaONaY2fVkdQztJwlFsxn5wrBTRXf6WR3dKH8I&_nc_ohc=HFo3L2fnVtoQ7kNvgHOyweJ&_nc_ht=scontent.fmnl4-3.fna&oh=00_AYCs3nQjSTWuj3LpGIEfryQm9uGkVfZ4uqgb0wZsZ5253Q&oe=66BF7D39" className="card-img-top" alt="Project 2" />
            <div className="card-body">
              <h5 className="card-title">Ning Ning</h5>
              <p className="card-text">06/25/2024</p>
              <a href="https://www.threads.net/@ntnl_lg/post/C8pC5MtP1Pq?xmt=AQGz1NU_VU2JfLIzVCifPiDpEcqF7IO2W5x3BXgvx9SJXw" className="btn btn-primary">View Process</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img src="https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/455223830_8052165901534267_9132512877281346370_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeESoWY_QUmNpejYIppmPgshCdL8tc8PsnoJ0vy1zw-yemrV3e5M9Jh7yqwjpGdrgN3kzk2Moy3QQZ_18LcKfoYC&_nc_ohc=VhvexzaFXhEQ7kNvgGGlh1Y&_nc_ht=scontent.fmnl4-2.fna&oh=00_AYDdJS_uhJulnG0X9_hvSdSeGrmwFpXiVxTBFZA72HuQaQ&oe=66BF91BC" className="card-img-top" alt="Project 3" />
            <div className="card-body">
              <h5 className="card-title">Drawing Closer</h5>
              <p className="card-text">07/03/2024</p>
              <a href="https://www.threads.net/@ntnl_lg/post/C87fiAft7zy?xmt=AQGz1NU_VU2JfLIzVCifPiDpEcqF7IO2W5x3BXgvx9SJXw" className="btn btn-primary">View Process</a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link to="/" className="btn btn-primary">Home</Link>
      </div>
    </div>
  );
};

export default Projects;
