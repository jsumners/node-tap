import React from 'react';
import styled from 'styled-components';
import {Image} from 'rebass';
import {colors} from '../../theme';
import {graphql} from 'gatsby';
import questionMark from '../../images/question-mark-2.gif';

const Content = styled.div`
  max-width: 700px;
  margin: auto;
  padding: 40px 20px;
`;

const QuestionMark = styled(Image)`
  width: 80px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const WhiteCircle = styled.div`
  width: 130px;
  height: 130px;
  background-color: ${colors.white};
  border-radius: 50%;
  margin: auto;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  position: absolute;
`;

const GreyCircle = styled.div`
  width: 160px;
  height: 160px;
  background-color: ${colors.lightGrey};
  border-radius: 50%;
  margin: auto;
  position: relative;
`;


const WhyTap = ({markdownData}) => {
  console.log(markdownData);
  return(
    <section>
      <Content>
        <GreyCircle>
          <WhiteCircle>
            <QuestionMark src={questionMark}/>
          </WhiteCircle>
        </GreyCircle>
        <div dangerouslySetInnerHTML={{ __html: markdownData}} />
      </Content>
    </section>
  )
}

export default WhyTap;