import React from 'react';
import { Button, Divider, Grid, Segment, Image } from 'semantic-ui-react';

const HairStylistDividerCard = () => (
  <Segment placeholder>
    <Grid columns={2} relaxed="very" stackable>
      <Grid.Column>
        <div>
          <Image
            src="https://images.pexels.com/photos/897262/pexels-photo-897262.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            size="medium"
            bordered
          />

          <Image
            src="https://images.pexels.com/photos/2799605/pexels-photo-2799605.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            size="medium"
            bordered
          />
        </div>

        <div>
          <Image
            src="https://images.pexels.com/photos/1654834/pexels-photo-1654834.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            size="medium"
            bordered
          />

          <Image
            src="https://images.pexels.com/photos/705255/pexels-photo-705255.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            size="medium"
            bordered
          />
        </div>
      </Grid.Column>

      <Grid.Column verticalAlign="middle">
        <Image
          className="salon"
          src="https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/6069358/910/607/m1/fpnw/wm0/1-.jpg?1552621547&s=fcf21185e310aa9bc9a4e212c0a5f079"
          size="big"
          bordered
        />
      </Grid.Column>
    </Grid>

    <Divider vertical>And</Divider>
  </Segment>
);

export default HairStylistDividerCard;
