/**
 * Internal dependencies
 */
import BlockDraggableChip from '../draggable-chip';

export default { title: 'BlockEditor/BlockDraggable' };

export const _default = () => {
	// create a wrapper box for the absolutely-positioned child component
	const wrapperStyle = { margin: '24px 0', position: 'relative' };
	return (
		<div style={ wrapperStyle }>
			<BlockDraggableChip clientIds={ [ 1, 2 ] } />
		</div>
	);
};
