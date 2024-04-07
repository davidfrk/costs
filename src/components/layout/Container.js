import styles from "./Container.module.css"

function Container (props) {
  const customClasses = props.customClass ? props.customClass.split(' ') : [];
  const containerClasses = [styles.container, ...customClasses.map(customClass => styles[customClass])].join(' ');

  return (
    <div className={containerClasses}>
      {props.children}
    </div>
  )
}

export default Container;