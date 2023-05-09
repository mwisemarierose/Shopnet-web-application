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
  import { LocalGroceryStore ,Category ,Add ,ListAlt } from '@material-ui/icons';

  const Menuitems = [
    {
      title: "Manager Dashboard",
      icon: DashboardOutlined,
      href: "/manager/home",
    },
    {
      title: "Supermarket List",
      icon: LocalGroceryStore ,
      href: "/manager/tables/supermarket-table",
    },
    {
      title: "Add Category",
      icon: Category,
      href: "/manager/form-layouts/Add-category",
    },
    {
      title: " Add Products",
      icon: Add,
      href: "/manager/form-layouts/Add-product",
    },
    {
      title: "Product List",
      icon: ListAlt,
      href: "/manager/form-layouts/product-list",
    },
    {
      title: " Category List",
      icon: ListAlt,
      href: "/manager/form-layouts/category-list",
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
  