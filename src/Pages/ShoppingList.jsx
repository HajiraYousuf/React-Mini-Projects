import { Plus, Search, ShoppingBag, Trash2 } from "lucide-react"
import { useState } from "react"

const ShoppingList = () => {
  const [items, setItems] = useState([])
  const [input, setInput] = useState("")
  const [search, setSearch] = useState("")

  // Add item
  const addItem = () => {
    if (input.trim() === "") return

    const newItem = {
      id: Date.now(),
      name: input,
      completed: false,
    }

    setItems([...items, newItem])
    setInput("")
  }

  // Delete item
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  // Complete / uncomplete item
  const toggleComplete = (id) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    )
  }

  // Clear all
  const clearAll = () => {
    setItems([])
  }

  // Search
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )

  const completedItems = items.filter(
    (item) => item.completed
  ).length

  return (
    <div className="min-h-screen bg-[#ecfdf5] flex items-center justify-center p-4">

      <div className="w-full max-w-2xl rounded-3xl bg-[#14532d] p-6 sm:p-8 shadow-2xl">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2">
            <ShoppingBag
              size={30}
              className="text-lime-400"
            />

            <h1 className="text-3xl font-bold text-white">
              Shopping List
            </h1>
          </div>

          <p className="mt-2 text-sm text-lime-100/70">
            Everything you need, all in one place
          </p>
        </div>

        {/* Search */}
        <div className="mb-8 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lg">

          <Search
            size={20}
            className="text-gray-400"
          />

          <input
            type="text"
            placeholder="Search your shopping list..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent text-gray-700 placeholder:text-gray-400 outline-none"
          />

        </div>

        {/* Add Item */}
        <div className="mb-8">

          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-lime-100">
            Add New Item
          </p>

          <div className="flex items-center gap-3">

            <input
              type="text"
              placeholder="What do you need?"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addItem()
                }
              }}
              className="flex-1 rounded-2xl bg-white/10 px-4 py-3 text-white placeholder:text-lime-100/50 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-lime-400"
            />

            <button
              onClick={addItem}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-lime-400 text-green-950 transition hover:bg-lime-300"
            >
              <Plus size={22} />
            </button>

          </div>
        </div>

        {/* Items Header */}
        <div className="mb-3 flex items-center justify-between">

          <p className="text-lg font-semibold text-white">
            My Items
          </p>

          <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-lime-100">
            {items.length} {items.length === 1 ? "item" : "items"}
          </span>

        </div>

        {/* Items */}
        <div className="space-y-3">

          {filteredItems.length === 0 ? (

            <div className="rounded-2xl bg-white/10 p-8 text-center">
              <ShoppingBag
                size={35}
                className="mx-auto mb-3 text-lime-300"
              />

              <p className="text-lime-100/70">
                {items.length === 0
                  ? "Your shopping list is empty"
                  : "No items found"}
              </p>
            </div>

          ) : (

            filteredItems.map((item) => (

              <div
                key={item.id}
                className="flex items-center justify-between rounded-2xl bg-white/90 p-4 shadow-sm transition hover:shadow-md"
              >

                <div className="flex items-center gap-3">

                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => toggleComplete(item.id)}
                    className="h-5 w-5 accent-lime-500"
                  />

                  <p
                    className={`font-medium ${
                      item.completed
                        ? "text-gray-400 line-through"
                        : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </p>

                </div>

                <button
                  onClick={() => deleteItem(item.id)}
                  className="text-gray-400 transition hover:text-red-500"
                >
                  <Trash2 size={19} />
                </button>

              </div>

            ))
          )}

        </div>

        {/* Footer */}
        {items.length > 0 && (

          <div className="mt-6 flex items-center justify-between text-sm">

            <p className="text-lime-100/70">
              {completedItems} of {items.length} completed
            </p>

            <button
              onClick={clearAll}
              className="text-lime-300 transition hover:text-lime-200"
            >
              Clear All
            </button>

          </div>

        )}

      </div>
    </div>
  )
}

export default ShoppingList