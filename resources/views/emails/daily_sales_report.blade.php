<h1>Daily Sales Report</h1>

@if(count($soldItems))
    <ul>
        @foreach($soldItems as $item)
            <li>
                {{ $item['name'] }} — Quantity Sold: {{ $item['quantity'] }}
            </li>
        @endforeach
    </ul>
@else
    <p>No products were sold today.</p>
@endif
