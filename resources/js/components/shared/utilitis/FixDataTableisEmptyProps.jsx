import { TableCell } from '@material-ui/core';

const FixDataTableisEmptyProps = () => {

    const oldRender = TableCell.render

    TableCell.render = function (...args) {
        const [props, ...otherArgs] = args
        if (typeof props === 'object' && props && 'isEmpty' in props) {
            const { isEmpty, ...propsWithoutEmpty } = props
            return oldRender.apply(this, [propsWithoutEmpty, ...otherArgs])
        } else {
            return oldRender.apply(this, args)
        }
    }
}
export default FixDataTableisEmptyProps;
