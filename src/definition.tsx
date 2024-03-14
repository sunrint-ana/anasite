import { ColorMode } from "@kobalte/core";
import moment from "dayjs";
import dayjs from "dayjs";
import duration, { Duration } from "dayjs/plugin/duration";
import { Accessor, Setter } from "solid-js";

dayjs.extend(duration);

export type Moment = moment.Dayjs;

export const startDate = moment.unix(1709823600);
export const endDate = moment.unix(1710507600);

export function revt(t: ColorMode): ColorMode {
  if (t == "dark") {
    return "light";
  } else {
    return "dark";
  }
}

export function subtractDate(
  date: number | Moment,
  date2: number | Moment
): Duration {
  if (typeof date === "number") {
    date = moment.unix(date);
  }
  if (typeof date2 === "number") {
    date2 = moment.unix(date2);
  }
  return dayjs.duration(date2.diff(date));
}

export function dateStringEvent(
  date: Accessor<number>,
  result: Accessor<string>,
  setResult: Setter<string>
) {
  const ctime = moment.unix(date());
  let s: Duration;
  let dateString: string;
  if (ctime.isAfter(startDate)) {
    if (ctime.isAfter(endDate)) {
      dateString = "지원 종료";
      setResult(dateString);
      return;
    } else {
      dateString = "지원 종료까지";
      s = subtractDate(ctime, endDate);
    }
  } else {
    dateString = "지원 모집까지";
    s = subtractDate(ctime, startDate);
  }
  dateString += ` ${
    s.days() + s.months() * 29
  }일 ${s.hours()}시간 ${s.minutes()}분 ${s.seconds()}초 남음`;

  if (dateString !== result()) {
    setResult(dateString);
  }
}
