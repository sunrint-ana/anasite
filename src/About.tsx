import { ColorModeProvider, ColorModeScript } from "@kobalte/core";
import { Col, Grid } from "./components/ui/grid";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { createEffect, createSignal, onCleanup } from "solid-js";
import moment from "dayjs";
import { dateStringEvent } from "./definition";
import { BoldText, SubTitle, Submit, Title } from "./components/utils";

export default function About() {
  const [date, setDate] = createSignal(moment().unix());
  const [result, setResult] = createSignal("");
  const timer = setInterval(() => {setDate(date()+1)}, 1000);
  createEffect(()=>{dateStringEvent(date, result, setResult)})
  onCleanup(() => clearInterval(timer))
  return (
    <div>
      <ColorModeScript />
      <ColorModeProvider>
        <div class="h-screen flex justify-center" id="about">
          <div class="flex flex-col mt-4 ml-2 lg:ml-0 sm:mt-10 sm:ml-4 md:mt-14">
            <Grid cols={1} colsMd={2} class="w-fit gap-2.5 mt-8">
              <Card class="h-full w-full">
                <CardHeader>
                  <Title>선린 유일의 풀스택 동아리</Title>
                </CardHeader>
                <CardContent>
                  <SubTitle class="mb-0 lg:mb-2">동아리의 핵심, 소통</SubTitle>
                  <p>동아리를 갔는데 소통이 되지 않는다면, 있는 의미가 없다고 생각합니다.</p>
                  <p>그러나 지금 선린의 동아리는 협업이나 소통하는 방식을 가르치지 않습니다.</p>
                  <BoldText>AnA는 협업을 가르칩니다.</BoldText>
                  <SubTitle class="mt-2">커리큘럼</SubTitle>
                  <p class="mt-2">시작은 서버의 기본인 리눅스부터,</p>
                  <p>데이터를 저장하는 데이터베이스,</p>
                  <p>백엔드에 사용되는 Python과 Java,</p>
                  <p>프론트에 거의 많이 사용되는 JavaScript,</p>
                  <p>요즘 뜨고 있는 Rust까지</p>
                  <BoldText>이 모든 걸 AnA에서 배울 수 있습니다.</BoldText>
                </CardContent>
              </Card>
              <Card class="h-full w-full">
                <CardHeader>
                  <Title>아이디어부터 프로젝트까지</Title>
                </CardHeader>
                <CardContent>
                  <SubTitle>아이디어로 완성되는 프로젝트</SubTitle>
                  <p class="mt-2">좋은 아이디어를 가지고 있다면 AnA에 들어와서 프로젝트를 만들어보세요.</p>
                  <p>동아리 지원비로 지원해드리며, 서류도 대신 작성해드립니다.</p>
                  <p class="text-gray-400">만약 학과에서 거절하면, 사비로 지원해드릴 수도 있습니다.</p>
                  <SubTitle class="mt-2">후배만 배우는 곳이 아닌 동아리</SubTitle>
                  <p class="mt-2">AnA에서 모르는 것이 있다면 물어봐도 됩니다.</p>
                  <p>AnA는 디스코드와 카카오톡이 존재하며, 꼭 필요한 채팅뿐만 아니라 하고 싶은 말을 하셔도 괜찮습니다.</p>
                  <SubTitle class="mt-2">대회와 연계하는 프로젝트</SubTitle>
                  <p class="mt-2">만약에 좋은 아이디어가 있으면, 대회 팀원을 구하여 대회를 나갈 수 있게 도와드릴 생각입니다.</p>
                  <BoldText>AnA는 프로그램이 아이디어로 완성된다고 생각합니다.</BoldText>
                </CardContent>
              </Card>
              <Col span={1} spanMd={2} class="mb-20 w-full">
                <Card class="h-fit">
                  <CardHeader>
                    <CardTitle class="text-3xl text-center">AnA 신청 기간</CardTitle>
                  </CardHeader>
                  <CardContent class="flex flex-col items-center">
                    <p class="text-xl font-se tabular-nums">{result()}</p>
                    <Submit class="mt-4" />
                  </CardContent>
                </Card>
              </Col>
            </Grid>
          </div>
        </div>
      </ColorModeProvider>
    </div>
  );
}
