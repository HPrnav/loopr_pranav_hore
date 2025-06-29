export function InputBox({label, placeholder,onChange}) {
    return <div>
      <div className="text-sm  placeholder-white text-white font-medium text-left py-2">
        {label}
      </div>
      <input  onChange={onChange} placeholder={placeholder} className="w-full px-2 py-1 text-white border rounded  placeholder-gray-400 border-slate-200" />
    </div>
}
