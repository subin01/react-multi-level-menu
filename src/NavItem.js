import React from "react";

export default function NavItem({ item, level }) {
  const hasChildren = item => {
    return item.children && item.children.length > 0;
  };

  const nextLevel = level => {
    return parseInt(level, 0) + 1;
  };

  const getLeaf = item => {
    return (
      <li className="leaf" key={item.id}>
        {item.name}
      </li>
    );
  };

  const getBranch = item => {
    return item.map(item => (
      <li key={item.id}>
        <a href={item.link}>{item.name}</a>
        {/* Recursion */}
        {hasChildren(item) && <NavItem item={item} level={nextLevel(level)} />}
      </li>
    ));
  };

  const getNav = item => {
    if (!hasChildren(item)) {
      return getLeaf(item);
    }
    return (
      <ul className={`level-${level}`}>
        <div className="head">
          <h1>{item.name}</h1>
          <a href="#seeall">See All</a>
        </div>
        {getBranch(item.children)}
      </ul>
    );
  };

  // return <div>{JSON.stringify(item)}</div>;

  return getNav(item);
}
