import { Alarm, Back, Calendar, Collaborator, Delete, Gallery, 
  Home, Left, Letter, Menu, Minihome, PopCaution, 
  PopMsg, PopNotice, Right, Write } from "../../assets";
import Header from "../../components/common/Header";

export default function Home () {
  return (
    <div>
      <Collaborator/>
      <Gallery/>
      <Alarm/>
    </div>
  );
}