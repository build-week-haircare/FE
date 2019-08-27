import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

const HairStylistModal = () => (
  <Modal trigger={<Button fluid>A Message For You</Button>} basic size="small">
    <Header icon="archive" content="Thank you for viewing my portfolio" />
    <Modal.Content>
      <p>
        Do you want to make and appointment? Hitting yes will bring you to my
        social media links, I can be reached at any one of my accounts.
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Link to="/">
        <Button basic color="red" inverted>
          <Icon name="remove" /> No
        </Button>
      </Link>
      <Link to="/portfolio/socialmedia">
        <Button color="green" inverted>
          <Icon name="checkmark" /> Yes
        </Button>
      </Link>
    </Modal.Actions>
  </Modal>
);

export default HairStylistModal;
