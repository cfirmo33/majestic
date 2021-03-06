import React from "react";
import styled from "styled-components";
import { space } from "styled-system";
import { useSpring, animated } from "react-spring";
import { Play, Check, Frown, CheckCircle, ZapOff } from "react-feather";
import { Summary } from "../../../server/api/workspace/summary";

const Container = styled.div<any>`
  ${space};
`;

const Row = styled.div`
  display: flex;
  font-size: 16px;
  margin-bottom: 5px;
`;

const Cell = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Label = styled.div`
  font-size: 13px;
  color: #dcdbdb;
`;

const Value = styled.div<any>`
  font-size: 20px;
  color: ${props => (props.failed ? "#FF4F56" : "#19E28D")};
`;

interface Props {
  summary: Summary | undefined;
}

export default function SummaryPanel({ summary }: Props) {
  const passedSuitesProps = useSpring({
    number: summary && summary.numPassedTestSuites | 0,
    from: { number: 0 }
  } as any);

  const failedSuitesProps = useSpring({
    number: summary && summary.numFailedTestSuites | 0,
    from: { number: 0 }
  } as any);

  const passedTestProps = useSpring({
    number: summary && summary.numPassedTests | 0,
    from: { number: 0 }
  } as any);

  const failedTestProps = useSpring({
    number: summary && summary.numFailedTests | 0,
    from: { number: 0 }
  } as any);

  return (
    <Container mt={3} mb={3}>
      <Row>
        <Cell>
          <Value>
            <animated.span>
              {(passedSuitesProps as any).number.interpolate((value: any) =>
                value.toFixed()
              )}
            </animated.span>
          </Value>
          <Label>
            <CheckCircle size={11} /> Passing suites
          </Label>
        </Cell>
        <Cell>
          <Value failed>
            <animated.span>
              {(failedSuitesProps as any).number.interpolate((value: any) =>
                value.toFixed()
              )}
            </animated.span>
          </Value>
          <Label>
            <ZapOff size={11} /> Failing suites
          </Label>
        </Cell>
      </Row>
      <Row>
        <Cell>
          <Value>
            <animated.span>
              {(passedTestProps as any).number.interpolate((value: any) =>
                value.toFixed()
              )}
            </animated.span>
          </Value>
          <Label>
            <CheckCircle size={11} /> Passing tests
          </Label>
        </Cell>
        <Cell>
          <Value failed>
            <animated.span>
              {(failedTestProps as any).number.interpolate((value: any) =>
                value.toFixed()
              )}
            </animated.span>
          </Value>
          <Label>
            <ZapOff size={11} /> Failing tests
          </Label>
        </Cell>
      </Row>
    </Container>
  );
}
