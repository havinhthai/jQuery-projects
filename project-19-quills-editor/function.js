
var quill = new Quill('#editor-container', {
    modules: {
        formula: true,
        syntax: true,
        toolbar: '#toolbar-container'
    },
    placeholder: 'Nhập nội dung',
    theme: 'snow'
});