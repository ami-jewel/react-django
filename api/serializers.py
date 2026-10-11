from rest_framework import serializers
from .models import HomePageContent, AboutPage, Product, CSRPage, ContactInfo

class HomePageSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomePageContent
        fields = '__all__'

class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutPage
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class CSRSerializer(serializers.ModelSerializer):
    class Meta:
        model = CSRPage
        fields = '__all__'

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactInfo
        fields = '__all__'