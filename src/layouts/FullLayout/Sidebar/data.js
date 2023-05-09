import {
  DashboardOutlined,
  AddToPhotosOutlined,
  AspectRatioOutlined,
  AssignmentTurnedInOutlined,
  AlbumOutlined,
  SwitchCameraOutlined,
  SwitchLeftOutlined,
  DescriptionOutlined,
  AutoAwesomeMosaicOutlined,
} from "@material-ui/icons/";
import { LocalGroceryStore ,Person,PersonAddAlt ,Add } from '@material-ui/icons';
const Menuitems = [
  {
    title: "Dashboard",
    icon: DashboardOutlined,
    href: "/dashboard/home",
  },
  {
    title: " Add Supermarkets",
    icon: Add,
    href: "/dashboard/form-layouts/form-layouts",
  },
  {
    title: "Supermarket List",
    icon: LocalGroceryStore,
    href: "/dashboard/tables/basic-table",
  },
  {
    title: "Add Manager",
    icon: PersonAddAlt,
    href: "/dashboard/form-layouts/form-layout",
  },
  {
    title: "Manager List",
    icon: Person,
    href: "/dashboard/tables/manager-table",
  },
  // {
  //   title: "Slider",
  //   icon: SwitchCameraOutlined,
  //   href: "/dashboard/form-elements/slider",
  // },
  // {
  //   title: "Switch",
  //   icon: SwitchLeftOutlined,
  //   href: "/dashboard/form-elements/switch",
  // },
  // {
  //   title: "Form",
  //   icon: DescriptionOutlined,
  //   href: "/dashboard/form-layouts/form-layouts",
  // },
  // {
  //   title: "Table",
  //   icon: AutoAwesomeMosaicOutlined,
  //   href: "/dashboard/tables/basic-table",
  // },
];

export default Menuitems;
