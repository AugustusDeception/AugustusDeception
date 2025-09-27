# 线段树深度解析 - 区间操作的利器

## 📖 算法概述
线段树是一种用于处理区间查询和区间更新的高效数据结构，时间复杂度为O(log n)。

## 🎯 应用场景
- 区间求和、最值查询
- 区间更新（加法、赋值）
- 区间统计问题

## 💻 核心实现

### 基础线段树模板
```cpp
#include <vector>
#include <algorithm>
using namespace std;

class SegmentTree {
private:
    vector<int> tree;
    int n;
    
    void build(vector<int>& nums, int node, int left, int right) {
        if (left == right) {
            tree[node] = nums[left];
            return;
        }
        int mid = left + (right - left) / 2;
        build(nums, node * 2, left, mid);
        build(nums, node * 2 + 1, mid + 1, right);
        tree[node] = tree[node * 2] + tree[node * 2 + 1];
    }
    
    void update(int node, int left, int right, int index, int val) {
        if (left == right) {
            tree[node] = val;
            return;
        }
        int mid = left + (right - left) / 2;
        if (index <= mid) {
            update(node * 2, left, mid, index, val);
        } else {
            update(node * 2 + 1, mid + 1, right, index, val);
        }
        tree[node] = tree[node * 2] + tree[node * 2 + 1];
    }
    
    int query(int node, int left, int right, int ql, int qr) {
        if (ql > right || qr < left) return 0;
        if (ql <= left && right <= qr) return tree[node];
        int mid = left + (right - left) / 2;
        return query(node * 2, left, mid, ql, qr) + 
               query(node * 2 + 1, mid + 1, right, ql, qr);
    }

public:
    SegmentTree(vector<int>& nums) {
        n = nums.size();
        tree.resize(4 * n);
        build(nums, 1, 0, n - 1);
    }
    
    void update(int index, int val) {
        update(1, 0, n - 1, index, val);
    }
    
    int query(int left, int right) {
        return query(1, 0, n - 1, left, right);
    }
};