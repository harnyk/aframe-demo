AFRAME.registerComponent('columns', {
    schema: {
        position: { type: 'vec3' },
        shiftX: { type: 'number' },
        shiftZ: { type: 'number' },
        countX: { type: 'number' },
        countZ: { type: 'number' },
        height: { type: 'number' },
        color: { type: 'color' },
        width: { type: 'number' }
    },

    makeColumn: function({ x, y, z, height, color, width }) {
        var scene = document.querySelector('a-scene');
        var col = document.createElement('a-box');
        col.setAttribute('position', { x, y, z });
        col.setAttribute('height', height);
        col.setAttribute('width', width);
        col.setAttribute('depth', width);
        col.setAttribute('material', {
            src: 'brick-texture.jpg',
            repeat: '1 4'
        });
        scene.appendChild(col);
    },

    init: function() {
        const {
            data: {
                position: { x: x0, y: y0, z: z0 },
                shiftX,
                shiftZ,
                countX,
                countZ,
                height,
                color,
                width
            }
        } = this;
        for (let x = x0, ix = 0; ix < countX; x += shiftX, ix++) {
            for (let z = z0, iz = 0; iz < countZ; z += shiftZ, iz++) {
                this.makeColumn({ x, y: y0, z, height, color, width });
            }
        }
    }
});
