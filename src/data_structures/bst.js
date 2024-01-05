export class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  insert(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
    let current = this
    while (current != null) {
      // go left
      if (value < current.value) {
        if (!current.left) {
          current.left = new BST(value)
          break
        } else {
          current = current.left
        }
        // else go right
      } else if (value >= current.value) {
        if (!current.right) {
          current.right = new BST(value)
          break
        } else {
          current = current.right
        }
      }
    }
    return this
  }

  contains(value) {
    // Write your code here.
    let current = this
    while (current != null) {
      if (current.value === value) {
        return true
      }
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      }
    }
    // current should be null at this point
    return false
  }

  find_min_value(current) {
    while (current.left) {
      current = current.left
    }
    return current.value
  }

  remove(value, parent) {
    // Write your code here.
    // Do not edit the return statement of this method.
    let current = this
    while (current) {
      // traverse left
      if (value < current.value) {
        parent = current
        current = current.left
        // traverse right
      } else if (value > current.value) {
        parent = current
        current = current.right
        // found
      } else if (value === current.value) {
        // if both children, remove min value
        if (current.left && current.right) {
          current.value = current.right.find_min_value(current.right)
          current.right.remove(current.value, current)
          // if no parent, aka the root
        } else if (!parent) {
          if (current.left) {
            current.value = current.left.value
            current.right = current.left.right
            current.left = current.left.left
          } else if (current.right) {
            current.value = current.right.value
            current.left = current.right.left
            current.right = current.right.right
            // parent has no children
          } else {
            current = null
          }
          // if current is a left child
        } else if (current === parent.left) {
          // if current has a left child
          if (current.left) {
            parent.left = current.left
            // if current has a right child
          } else {
            parent.left = current.right
          }
          // if current is a right child
        } else if (current === parent.right) {
          // if current has a left child
          if (current.left) {
            parent.right = current.left
            // if current has a right child
          } else {
            parent.right = current.right
          }
        }
        break
      }
    }

    return this
  }
}
