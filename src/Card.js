import * as React from 'react';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';

import { Image, Shimmer } from 'react-shimmer'


export default function ActionAreaCard(props) {
 
  return (
    <Card sx={{ maxWidth: 345 , maxHeight: 270,objectFit:'cover'}} onClick={(e)=>props.open_link(e)}>
      <CardActionArea>
        <Image src={props.pic_link} fallback={<Shimmer width={400} height={300} />} className={'pic'}/>
      </CardActionArea>
    </Card>
  );
}

