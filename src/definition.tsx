import { ColorMode } from "@kobalte/core";
import moment from "dayjs";
import { Accessor, Setter } from "solid-js";

export type Moment = moment.Dayjs;

export const startDate = moment.unix(1709823600);
export const endDate = moment.unix(1710428400);

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
): Moment {
  if (typeof date !== "number") {
    date = date.unix();
  }
  if (typeof date2 !== "number") {
    date2 = date2.unix();
  }
  return moment.unix(date2 - date);
}

export function dateStringEvent(
  date: Accessor<number>,
  result: Accessor<string>,
  setResult: Setter<string>
) {
  const ctime = moment.unix(date());
  let s: Moment;
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
    s.date() + s.month() * 29
  }일 ${s.hour()}시간 ${s.minute()}분 ${s.second()}초 남음`;

  if (dateString !== result()) {
    setResult(dateString);
  }
}
