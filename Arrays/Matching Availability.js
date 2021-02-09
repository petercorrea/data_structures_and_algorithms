// Return the matching availability of two cals given the two cals,
// a daily start and end times, and a meeting duration.

// Sample Input
// calendar1 = [['9:00', '10:30'], ['12:00', '13:00'], ['16:00', '18:00']]
// dailyBounds1 = ['9:00', '20:00']
// calendar2 = [['10:00', '11:30'], ['12:30', '14:30'], ['14:30', '15:00'], ['16:00', '17:00']]
// dailyBounds2 = ['10:00', '18:30']
// meetingDuration = 30

// Sample Output
// [
// 	["11:30", "12:00"],
// 	["15:00", "16:00"],
// 	["18:00", "18:30"],
// ];

// Time & Space: c1 + c2
function calendarMatching(
	calendar1,
	dailyBounds1,
	calendar2,
	dailyBounds2,
	meetingDuration
) {
	let cal1 = createIndividualCal(calendar1, dailyBounds1);
	let cal2 = createIndividualCal(calendar2, dailyBounds2);
	let combined = combineTwoCals(cal1, cal2);
	let flatten = flattenCal(combined);
	return getAvailability(flatten, meetingDuration);
}

function getAvailability(cal, meetingDuration) {
	let matchingAvail = [];

	for (let i = 1; i < cal.length; i++) {
		let previousEndtime = cal[i - 1][1];
		let nextStartTime = cal[i][0];
		let availableTime = nextStartTime - previousEndtime;

		if (availableTime >= meetingDuration) {
			matchingAvail.push([previousEndtime, nextStartTime]);
		}
	}

	return matchingAvail.map((meeting) => meeting.map(minToTime));
}

function flattenCal(cal) {
	let flatten = [cal[0]];

	for (let i = 1; i < cal.length; i++) {
		let currentEvent = cal[i];
		let prevEvent = flatten[flatten.length - 1];
		const [currentStart, currentEnd] = currentEvent;
		const [prevStart, prevEnd] = prevEvent;

		if (prevEnd >= currentStart) {
			flatten[flatten.length - 1] = [prevStart, Math.max(prevEnd, currentEnd)];
		} else {
			flatten.push(currentEvent);
		}
	}

	return flatten;
}

function combineTwoCals(calendar1, calendar2) {
	let merged = [];

	let i = 0;
	let j = 0;

	while (i < calendar1.length && j < calendar2.length) {
		let event1 = calendar1[i];
		let event2 = calendar2[j];

		if (event1[0] < event2[0]) {
			merged.push(event1);
			i++;
		} else {
			merged.push(event2);
			j++;
		}
	}

	while (i < calendar1.length) merged.push(calendar1[i++]);
	while (j < calendar2.length) merged.push(calendar2[j++]);
	return merged;
}

function createIndividualCal(cal, bounds) {
	let result = [["00:00", bounds[0]], ...cal, [bounds[1], "23:59"]];
	return result.map((time) => time.map(timeToMinutes));
}

function timeToMinutes(string) {
	let [hour, min] = string.split(":").map((str) => parseInt(str));
	return hour * 60 + min;
}

function minToTime(mins) {
	let hours = Math.floor(mins / 60);
	let minutes = mins % 60;
	let hoursString = hours.toString();
	let minString = minutes < 10 ? "0" + minutes.toString() : minutes.toString();
	return hoursString + ":" + minString;
}
