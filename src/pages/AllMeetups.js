import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

function AllMeetupsPage() {
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
}

export default AllMeetupsPage;
// test

/*

DUMMY_DATA 상수는 Meetup 데이터를 담고 있는 배열입니다. 
이 배열은 MeetupList 컴포넌트에 meetups라는 이름의 props로 전달됩니다.

MeetupList 컴포넌트는 meetups라는 props를 받아, Meetup 데이터를 사용하여 목록을 렌더링합니다.
 MeetupList 컴포넌트가 어떻게 구현되었는지는 코드에서는 알 수 없습니다.

AllMeetupsPage 컴포넌트에서는 h1 태그와 MeetupList 컴포넌트를 렌더링하고 있습니다. 
MeetupList 컴포넌트에 meetups={DUMMY_DATA}와 같이 props를 전달하면, 
MeetupList 컴포넌트에서는 전달된 DUMMY_DATA를 사용하여 목록을 렌더링합니다.

따라서, 위 코드는 Meetup 데이터를 담고 있는 DUMMY_DATA 배열을 MeetupList 컴포넌트의 meetups props로 전달하여, 
Meetup 목록을 렌더링하는 예시입니다.*/
