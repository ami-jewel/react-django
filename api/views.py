from rest_framework import viewsets
from .models import HomePageContent, AboutPage, Product, CSRPage, ContactInfo
from .serializers import (
    HomePageSerializer, 
    AboutSerializer, 
    ProductSerializer, 
    CSRSerializer, 
    ContactSerializer
)

class HomeViewSet(viewsets.ModelViewSet):
    queryset = HomePageContent.objects.all()
    serializer_class = HomePageSerializer

class AboutViewSet(viewsets.ModelViewSet):
    queryset = AboutPage.objects.all()
    serializer_class = AboutSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class CSRViewSet(viewsets.ModelViewSet):
    queryset = CSRPage.objects.all()
    serializer_class = CSRSerializer

class ContactViewSet(viewsets.ModelViewSet):
    queryset = ContactInfo.objects.all()
    serializer_class = ContactSerializer