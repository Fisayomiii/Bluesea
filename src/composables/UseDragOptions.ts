import { reactive } from 'vue'

import type { NotivueSlot } from 'notivue'
import type { DragOptions } from '@neodrag/vue'

export function useDragOptions() {
    // Record drag positions of each notification
    const positions = reactive({}) as Record<string, { x: number; y: number }>

    function setPosition(id: string, x: number) {
        positions[id] = { x, y: 0 }
    }

    return (item: NotivueSlot): DragOptions => {
        // Disable dragging for promises, you may add other conditions such as mobile only
        if (item.type === 'promise') return { disabled: true }

        return {
            // Drag position
            position: positions[item.id] ?? { x: 0, y: 0 },

            // Lock dragging horizontally
            axis: 'x',
            // Selector to exclude from dragging (close button)
            cancel: '.Notivue__close',

            onDrag: ({ offsetX, rootNode }) => {
                // Update drag position
                setPosition(item.id, offsetX)

                // Do not play any transition as we are manually moving the notification
                rootNode.style.transitionDuration = '0s'
                // Fade-in / fade-out according to the dragged distance
                rootNode.style.opacity = `${1 - Math.abs(offsetX) / (rootNode.clientWidth * 0.75)
                    }`

                // Call `clear` method if dragged more than the half of the notification's width
                if (Math.abs(offsetX) >= rootNode.clientWidth / 2) {
                    item.clear()
                }
            },

            onDragEnd: ({ offsetX, rootNode }) => {
                // When drag ends reset opacity and set a transition duration
                rootNode.style.opacity = '1'
                rootNode.style.transitionDuration = '0.3s'

                // If not swiped enough, return to initial position using the above transition duration
                if (Math.abs(offsetX) <= rootNode.clientWidth / 2) {
                    setPosition(item.id, 0)
                }
            }
        }
    }
}