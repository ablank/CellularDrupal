module.exports = {
     
    images: {
        // specify files in array format with multiple src-dest mapping
        files: [
            // rasterize all SVG files in "img" and its subdirectories to "img/png"
            {
                cwd: 'assets/images/svg/',
                src: ['*.svg'],
                dest: 'assets/images/png/',
            }
        ]
    },
};
