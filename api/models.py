from django.db import models

# ১. হোম পেজের কন্টেন্ট
class HomePageContent(models.Model):
    title = models.CharField(max_length=200, default="Welcome to Our Buying House")
    subtitle = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.title

# ২. অ্যাবাউট আস পেজ
class AboutPage(models.Model):
    heading = models.CharField(max_length=200, default="About Us")
    content = models.TextField()

    def __str__(self):
        return self.heading

# ৩. প্রোডাক্ট বা কাপড়ের কালেকশন পেজ
class Product(models.Model):
    CATEGORY_CHOICES = (
        ('Men', 'Men'),
        ('Women', 'Women'),
        ('Kids', 'Kids'),
    )
    name = models.CharField(max_length=150)
    category = models.CharField(max_length=100, choices=CATEGORY_CHOICES, default='Men')
    image_url = models.CharField(max_length=255, blank=True, null=True)
    description = models.TextField(blank=True, null=True)

# ৪. সিএসআর (CSR) পেজ
class CSRPage(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()

    def __str__(self):
        return self.title

# ৫. কন্টাক্ট ইনফরমেশন পেজ
class ContactInfo(models.Model):
    address = models.TextField()
    email = models.EmailField()
    phone = models.CharField(max_length=50)

    def __str__(self):
        return "Contact Information"