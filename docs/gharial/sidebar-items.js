initSidebarItems({"struct":[["MaybeAlloc","`MaybeAlloc` is an implementation for `GlobalAlloc` , which occasionally fails to allocate."],["NeverAlloc","`NeverAlloc` is an implementation for `GlobalAlloc` , which always fails. For example, `NeverAlloc::alloc` always returns a null pointer."],["TestAlloc","`TestAlloc` is a implementation for `GlobalAlloc` to test memory leak and so on."],["TestBox","`TestBox` behaves like `std::boxed::Box` except for it owns a reference to a `GlobalAlloc` ."]]});