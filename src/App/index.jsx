import { Slider, Avatar, Row, Col } from "antd";
import moment from "moment";

import "antd/dist/antd.css";

function formatter(value) {
  return moment.unix(value).format("YYYY-MM-DD HH:mm:SS");
}

/**
 * file: https://github.com/xx7y7xx/gitlab-pipeline
 */
const App = () => {
  return (
    <div>
      {JSON.parse(localStorage.getItem("pipelines.json")).pipelines.map(
        (pipeline) => (
          <Row key={pipeline.id}>
            <Col span={1}>
              <Avatar src={pipeline.user.avatar_url} />
            </Col>
            <Col span={23}>
              <Slider
                disabled
                range
                min={moment().unix() - 3600 * 6}
                max={moment().unix()}
                defaultValue={
                  pipeline.details.finished_at
                    ? [
                        moment(pipeline.created_at).unix(),
                        moment(pipeline.details.finished_at).unix(),
                      ]
                    : [moment(pipeline.created_at).unix(), moment().unix()]
                }
                tipFormatter={formatter}
              />
            </Col>
          </Row>
        )
      )}
    </div>
  );
};

export default App;
