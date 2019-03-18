//创建节点
function Node(data,left,right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

//显示树的数据
function show() {
    return this.data;
}

//二叉查找树类
function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
}

//插入数据
function insert(data) {
    let n = new Node(data,null,null);
    if(this.root === null) {
        this.root = n;
    }else{
        let current = this.root;
        let parent;
        while (true) {
            parent = current;
            if(data < current.data){
                current = current.left;
                if(current === null) {
                    parent.left = n;
                    break;
                }
            }else{
                current = current.right;
                if(current === null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}
insert(2);
insert(4);