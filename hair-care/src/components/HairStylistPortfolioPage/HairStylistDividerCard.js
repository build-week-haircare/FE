import React from 'react';
import { Button, Divider, Grid, Segment, Image } from 'semantic-ui-react';
import HairStylistModal from './HairStylistModal';

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
            src="https://images.pexels.com/photos/696287/pexels-photo-696287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
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
        <HairStylistModal />
      </Grid.Column>
    </Grid>

    <Divider vertical>And</Divider>
  </Segment>
);

export default HairStylistDividerCard;
