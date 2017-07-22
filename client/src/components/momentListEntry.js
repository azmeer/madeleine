import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const MomentListEntry = ({ moment }) => {
  const {keys, media, sentiment, createdAt} = moment;
  const imgURL = `/assets/${sentiment}.png`;
  return (
    <Card>
      <CardMedia>
        <img src={imgURL} alt="" />
      </CardMedia>
      <CardTitle title="Card title" subtitle="Card subtitle" />
      <CardText>{}</CardText>
      <CardActions>
        <FlatButton label="Button1" />
        <FlatButton label="Button2" />
      </CardActions>
    </Card>
  );
};


export default MomentListEntry;
