import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;

/**
 * 위 코드는 MeetupList 컴포넌트입니다. 이 컴포넌트는 Meetup 데이터를 받아와서, 
 * Meetup 목록을 렌더링하는 역할을 합니다.

MeetupList 컴포넌트는 props를 매개변수로 받아, props.meetups 배열에 있는 Meetup 데이터를 사용합니다.
 props.meetups는 AllMeetupsPage 컴포넌트에서 전달한 DUMMY_DATA 배열입니다.

MeetupList 컴포넌트는 MeetupItem 컴포넌트를 렌더링합니다. 
MeetupItem 컴포넌트는 하나의 Meetup을 나타내는 컴포넌트이며, 
MeetupList 컴포넌트에서 Meetup 데이터를 전달받아 사용합니다. 

MeetupList 컴포넌트에서는 props.meetups 배열을 map 함수를 사용하여 
MeetupItem 컴포넌트의 여러 인스턴스를 생성합니다.

매핑된 MeetupItem 컴포넌트의 props는 meetup 객체의 속성들로 설정됩니다.
 meetup 객체는 props.meetups 배열의 요소로부터 비구조화할당을 사용하여 추출됩니다. 
 이렇게 MeetupItem 컴포넌트에 전달된 props는, 각각의 Meetup을 나타내는 데 사용됩니다.

마지막으로, MeetupList 컴포넌트는 <ul> 태그로 Meetup 목록을 렌더링합니다. 
MeetupItem 컴포넌트에서 전달받은 props를 사용하여, 하나의 Meetup을 나타내는 <li> 태그를 렌더링합니다.
 이렇게 MeetupList 컴포넌트는 Meetup 목록을 렌더링하는 역할을 수행하게 됩니다.
 */
