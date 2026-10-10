from django.shortcuts import render
from django.db import connection
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Item
from .serializers import ItemSerializer

# Create your views here.

#@api_view(['GET'])
#def hello_world(request):
#    db_engine = connection.vendor    
#    if db_engine == 'postgresql':
#        db_name = "PostgreSQL"
#    else:
#        db_name = "SQLite"
#        
#    return Response({"message": f"Hello! Data has ingest from Django and {db_name} Successfully."})

@api_view(['GET', 'POST'])
def hello_world(request):
    db_engine = connection.vendor
    db_name = "PostgreSQL" if db_engine == 'postgresql' else "SQLite"

    if request.method == 'GET':
        items = Item.objects.all().order_by('-id')
        serializer = ItemSerializer(items, many=True)
        return Response({
            "message": f"Hello! Data has ingest from Django and {db_name} Successfully.",
            "data": serializer.data
        })
    
    elif request.method == 'POST':
        serializer = ItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)