import React from 'react';
import styled from 'styled-components';
import { products } from './Products';
import { Grid, Typography } from '@material-ui/core';
import { Button } from './_common/index';

// ------ STYLING -----
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const Card = styled.div`
  display: flex;
  padding-bottom: 16px;
  flex-direction: column;
  box-shadow: #b9826996 0px 0px 0px 1px inset;
  background-color: #b9826921;
  border-radius: 4px;
  &:hover {
    background-color: #b9826975;
  }
  & p {
    text-align: center;
    margin: 0;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  margin: 16px;
  & img {
    border-radius: 4px;
    width: 100%;
  }
  &:hover {
    & .hovered {
      display: block;
    }
  }
  & .hovered {
    position: absolute;
    width: 100%;
    top: 0;
    display: none;
  }
`;

const StyledHeader = styled(Typography)`
  margin-bottom: 16px;
`;

// --------------------

function FormResults(props) {
  const { values } = props;

  const results = [
    { title: 'Budget', value: values.budget },
    { title: 'Metal', value: values.metal },
    { title: 'White Diamond', value: values.whiteDiamond },
    { title: 'Colored Diamond', value: values.coloredDiamond },
    { title: 'Other Gems', value: values.otherGem },
    { title: 'None', value: values.noGem },
    { title: 'Style', value: values.style },
  ];

  const moveBack = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const pricify = (input) => {
    const pound = '£';
    const newInput = input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return pound + newInput;
  };

  const gemsList = [results[2], results[3], results[4], results[5]];
  const gems = gemsList.filter((item) => item.value).map((gem) => gem.title);

  const filteredListAll = products.filter(
    (item) =>
      item.price < values.budget &&
      item.style === values.style &&
      item.metal === values.metal &&
      gems.some((r) => item.gems.includes(r))
  );

  return (
    <div>
      {console.log(gems)}
      {console.log(filteredListAll.map((item) => item.gems))}

      <StyledHeader variant='h4'>
        Here is a collection of products we think you'll like:
      </StyledHeader>

      <Grid container spacing={1}>
        {filteredListAll.map((product) => (
          <Grid item key={product.sku} xs={4}>
            <Card>
              <ImageContainer>
                <img src={product.image1} alt={product.name} />
                <img
                  className='hovered'
                  src={product.image2}
                  alt={product.name}
                />
              </ImageContainer>

              <p>{product.name}</p>
              <p>{product.designer}</p>
              <p>{pricify(product.price)}</p>
            </Card>
          </Grid>
        ))}
      </Grid>

      <ButtonGroup>
        <Button onClick={moveBack}>Back</Button>
      </ButtonGroup>
    </div>
  );
}

export default FormResults;
